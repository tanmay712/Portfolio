import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/lib/constants";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // Accept a users base URL, a complete user URL, or a {userId} template.
    const configured = process.env.LANYARD_API_URL?.trim() ||
      process.env.NEXT_PUBLIC_LANYARD_API_URL?.trim() ||
      "https://api.lanyard.rest/v1/users";
    const userId = encodeURIComponent(SITE_CONFIG.lanyardId);
    const url = new URL(configured.replaceAll("{userId}", userId));
    if (!["https:", "http:"].includes(url.protocol)) throw new Error("Invalid protocol");
    url.pathname = url.pathname.replace(/\/$/, "");
    if (!/\/\d+$/.test(url.pathname) && !configured.includes("{userId}")) {
      url.pathname += `/${userId}`;
    }

    const headers = new Headers({ Accept: "application/json" });
    const key = process.env.LANYARD_API_KEY?.trim();
    if (key) {
      const header = process.env.LANYARD_API_KEY_HEADER?.trim() || "Authorization";
      const prefix = process.env.LANYARD_API_KEY_PREFIX ?? "Bearer";
      headers.set(header, prefix ? `${prefix} ${key}` : key);
    }
    const response = await fetch(url, {
      headers,
      cache: "no-store",
      redirect: "error",
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error("Upstream unavailable");
    const payload = await response.json();
    if (!payload.success || !payload.data) throw new Error("Invalid presence");
    // Never forward upstream headers or errors (which may contain credentials).
    return NextResponse.json({ success: true, data: payload.data }, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json({ success: false, error: "Lanyard unavailable" }, {
      status: 502,
      headers: { "Cache-Control": "no-store" },
    });
  }
}
