import { LanyardApiResponse, LanyardData } from "@/types/discord";

/** Fetch through our server so custom endpoint credentials never reach the browser. */
export async function fetchLanyardPresence(): Promise<LanyardData | null> {
  try {
    const response = await fetch("/api/discord", {
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return null;
    const json = (await response.json()) as LanyardApiResponse;
    return json.success && json.data ? json.data : null;
  } catch {
    return null;
  }
}
