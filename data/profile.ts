import { SITE_CONFIG } from "@/lib/constants";
import { ProfileData } from "@/types/profile";

export const PROFILE_DATA: ProfileData = {
  brand: SITE_CONFIG.brand,
  osName: SITE_CONFIG.name,
  version: SITE_CONFIG.version,
  domain: SITE_CONFIG.domain,
  user: SITE_CONFIG.username,
  host: "portfolio",
  shell: `${SITE_CONFIG.username}-shell`,
  prompt: `${SITE_CONFIG.username}@portfolio:~$`,
  lanyardId: SITE_CONFIG.lanyardId,
  email: SITE_CONFIG.email,
  avatar: SITE_CONFIG.avatar,
  headline: "A space for ideas, experiments, and what's next.",
  subheadline:
    "Hey, I'm void — also known as definescloud. Welcome to my little corner of the internet.",
  bio: "This is my home on the web: a place for ideas, experiments, and things worth sharing. The story is still being written. Have something in mind? My inbox is open.",
  // These are current focus notes, not invented employment or qualifications.
  experience: [
    {
      role: "A work in progress",
      period: "Now",
      focus:
        "Making room for new ideas, creative experiments, and projects. This space will grow along the way.",
    },
    {
      role: "Let's connect",
      period: "Anytime",
      focus:
        "For questions, ideas, or support, reach out at void@definescloud.site. You can also find me on Discord as definescloud.",
    },
  ],
};
