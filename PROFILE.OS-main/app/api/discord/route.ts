import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/lib/constants";

export async function GET() {
  try {
    const response = await fetch(
      `${SITE_CONFIG.lanyardApiUrl}/${encodeURIComponent(SITE_CONFIG.lanyardId)}`,
      { signal: AbortSignal.timeout(8000), next: { revalidate: 10 } }
    );
    if (!response.ok) {
      return NextResponse.json({ success: false, error: "Lanyard unavailable" }, { status: 502 });
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ success: false, error: "Lanyard unavailable" }, { status: 502 });
  }
}
