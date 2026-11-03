import React from "react";
import { CommandDefinition } from "@/commands/types";
import { SOCIAL_LINKS } from "@/data/socials";

export const githubCommand: CommandDefinition = {
  command: "github",
  description: "View the public GitHub link, when configured",
  category: "core",
  execute: () => {
    const github = SOCIAL_LINKS.github;
    return {
      panel: "github",
      output: React.createElement(
        "div",
        { className: "max-w-md space-y-3 rounded-xl border border-zinc-800/90 bg-zinc-950/75 p-4 font-mono text-xs sm:text-sm" },
        React.createElement("div", { className: "font-semibold text-cyan-400" }, "GITHUB // PUBLIC CODE"),
        React.createElement("p", { className: "leading-relaxed text-zinc-400" }, github
          ? "Explore public repositories, experiments, and works in progress."
          : "A public GitHub profile hasn't been linked yet. In the meantime, you can find me on Discord or reach out by email."),
        github
          ? React.createElement("a", {
              href: github.url,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-block text-cyan-400 underline underline-offset-4 hover:text-cyan-300",
            }, github.handle)
          : React.createElement("span", { className: "text-zinc-500" }, "Try discord or contact.")
      ),
    };
  },
};
