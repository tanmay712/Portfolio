import { NextResponse } from "next/server";
import { fetchGitHubTelemetry } from "@/lib/github/github";

export async function GET() {
  const telemetry = await fetchGitHubTelemetry();
  return NextResponse.json(telemetry, {
    headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600" },
  });
}
