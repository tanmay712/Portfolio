import React from "react";
import { CommandDefinition } from "@/commands/types";
import { SOCIAL_LINKS } from "@/data/socials";

export const socialsCommand: CommandDefinition = {
  command: "socials",
  description: "List public contact channels",
  category: "core",
  execute: () => ({
    panel: "socials",
    output: React.createElement(
      "div",
      { className: "max-w-lg space-y-3 rounded-xl border border-zinc-800/90 bg-zinc-950/75 p-4 font-mono text-xs sm:text-sm" },
      React.createElement("div", { className: "font-semibold tracking-wider text-cyan-400" }, "SOCIALS // PUBLIC CHANNELS"),
      React.createElement("div", { className: "space-y-3" },
        ...Object.values(SOCIAL_LINKS).map((item) =>
          React.createElement("div", { key: item.id, className: "flex flex-wrap items-center justify-between gap-2 border-b border-zinc-900 pb-2" },
            React.createElement("span", { className: "text-zinc-500" }, item.label),
            React.createElement("a", {
              href: item.url,
              target: item.id === "email" ? undefined : "_blank",
              rel: item.id === "email" ? undefined : "noopener noreferrer",
              className: "break-all text-cyan-400 underline underline-offset-4 hover:text-cyan-300",
            }, item.handle)
          )
        )
      )
    ),
  }),
};
