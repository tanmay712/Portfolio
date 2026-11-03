import { SITE_CONFIG } from "@/lib/constants";
import { LanyardApiResponse, LanyardData } from "@/types/discord";

const LANYARD_REST_BASE = SITE_CONFIG.lanyardApiUrl;

/**
 * Fetches current Discord presence snapshot from Lanyard REST API.
 */
export async function fetchLanyardPresence(
  userId: string = SITE_CONFIG.lanyardId
): Promise<LanyardData | null> {
  try {
    const response = await fetch(`${LANYARD_REST_BASE}/${userId}`, {
      method: "GET",
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      return null;
    }

    const json = (await response.json()) as LanyardApiResponse;
    if (!json.success || !json.data) {
      return null;
    }

    return json.data;
  } catch {
    return null;
  }
}
