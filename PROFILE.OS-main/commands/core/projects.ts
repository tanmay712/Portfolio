import React from "react";
import { CommandDefinition } from "@/commands/types";
import { SOCIAL_LINKS } from "@/data/socials";
import { PROFILE_DATA } from "@/data/profile";

export const projectsCommand: CommandDefinition = {
  command: "projects",
  description: "Explore the project space",
  category: "core",
  execute: () => ({
    panel: "projects",
    output: React.createElement(
      "div",
      { className: "max-w-lg space-y-3 rounded-xl border border-zinc-800/90 bg-zinc-950/75 p-4 font-mono text-xs sm:text-sm" },
      React.createElement("div", { className: "font-semibold text-cyan-400" }, "PROJECTS // A WORK IN PROGRESS"),
      React.createElement("p", { className: "leading-relaxed text-zinc-300" }, "Good things take shape one experiment at a time. Selected projects will live here when they're ready to share."),
      React.createElement("p", { className: "text-zinc-500" }, "Have an idea worth building together? Let's talk."),
      React.createElement("a", {
        href: SOCIAL_LINKS.github?.url || `mailto:${PROFILE_DATA.email}`,
        target: SOCIAL_LINKS.github ? "_blank" : undefined,
        rel: SOCIAL_LINKS.github ? "noopener noreferrer" : undefined,
        className: "inline-block text-cyan-400 underline underline-offset-4 hover:text-cyan-300",
      }, SOCIAL_LINKS.github?.handle || PROFILE_DATA.email)
    ),
  }),
};
