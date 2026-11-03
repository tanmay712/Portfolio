import { SITE_CONFIG } from "@/lib/constants";

export interface SocialLink {
  id: "github" | "email" | "discord";
  label: string;
  handle: string;
  url: string;
}

/** Only supplied, public contact channels are included by default. */
export const SOCIAL_LINKS: Record<string, SocialLink> = {
  discord: {
    id: "discord",
    label: "Discord",
    handle: `@${SITE_CONFIG.username}`,
    url: `https://discord.com/users/${SITE_CONFIG.lanyardId}`,
  },
  email: {
    id: "email",
    label: "Support email",
    handle: SITE_CONFIG.email,
    url: `mailto:${SITE_CONFIG.email}`,
  },
  ...(SITE_CONFIG.githubUsername
    ? {
        github: {
          id: "github" as const,
          label: "GitHub",
          handle: `github.com/${SITE_CONFIG.githubUsername}`,
          url: `https://github.com/${SITE_CONFIG.githubUsername}`,
        },
      }
    : {}),
};
