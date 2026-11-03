const DEFAULT_SITE_URL = "https://definescloud.site";

function getSiteUrl(): string {
  try {
    const url = new URL(process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL);
    return url.protocol === "https:" || url.protocol === "http:"
      ? url.origin
      : DEFAULT_SITE_URL;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

/** Public identity shared by the UI, terminal commands, metadata, and APIs. */
export const SITE_CONFIG = {
  brand: "void",
  username: "definescloud",
  name: "PROFILE.OS",
  version: "6.9.0",
  siteUrl: getSiteUrl(),
  domain: new URL(getSiteUrl()).host,
  lanyardId: process.env.NEXT_PUBLIC_LANYARD_USER_ID || "337964487241891840",
  lanyardApiUrl:
    process.env.NEXT_PUBLIC_LANYARD_API_URL || "https://api.lanyard.rest/v1/users",
  email: "void@definescloud.site",
  avatar: "/avatar.png",
  // No GitHub account was supplied; do not link to the template owner's account.
  githubUsername: process.env.NEXT_PUBLIC_GITHUB_USERNAME?.trim() || "",
} as const;
