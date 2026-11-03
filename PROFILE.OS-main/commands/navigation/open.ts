import React from "react";
import { CommandDefinition } from "@/commands/types";
import { SOCIAL_LINKS } from "@/data/socials";

const INTERNAL_PANELS = ["about", "skills", "projects", "github", "discord", "music", "socials", "home"] as const;
const usage = `open <${Object.keys(SOCIAL_LINKS).join(" | ")}>`;

export const openCommand: CommandDefinition = {
  command: "open",
  description: "Open a public contact link or internal panel",
  category: "navigation",
  usage,
  execute: (args) => {
    const target = (args[0] || "").trim().toLowerCase();
    if (!target) {
      return { output: React.createElement("div", { className: "font-mono text-xs text-amber-300" }, `Usage: ${usage}`) };
    }
    const social = Object.hasOwn(SOCIAL_LINKS, target) ? SOCIAL_LINKS[target] : undefined;
    if (social) {
      if (typeof window !== "undefined") {
        if (social.id === "email") window.location.href = social.url;
        else window.open(social.url, "_blank", "noopener,noreferrer");
      }
      return { output: React.createElement("div", { className: "font-mono text-xs text-emerald-400" }, `→ Opening ${social.label} (${social.handle})...`) };
    }
    if ((INTERNAL_PANELS as readonly string[]).includes(target)) {
      return {
        panel: target as typeof INTERNAL_PANELS[number],
        output: React.createElement("div", { className: "font-mono text-xs text-cyan-400" }, `→ Mounted ${target.toUpperCase()} module.`),
      };
    }
    return { output: React.createElement("div", { className: "font-mono text-xs text-rose-400" }, `Target "${target}" not found. Try ${Object.keys(SOCIAL_LINKS).map((key) => `open ${key}`).join(", ")}.`) };
  },
};
