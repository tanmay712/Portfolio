import React from "react";
import { CommandDefinition } from "@/commands/types";
import { STACK_BLUEPRINT } from "@/data/skills";

export const stackCommand: CommandDefinition = {
  command: "stack",
  description: "Show the technologies used to build this portfolio",
  category: "core",
  execute: () => ({
    output: React.createElement(
      "pre",
      { className: "max-w-xl overflow-x-auto rounded-xl border border-zinc-800/90 bg-zinc-950/75 p-4 font-mono text-xs leading-relaxed text-zinc-300 sm:text-sm" },
      `Holds indra // BUILT WITH\n\n${STACK_BLUEPRINT.map((group) => `${group.title}\n  ${group.items.join(" · ")}`).join("\n\n")}`
    ),
  }),
};
