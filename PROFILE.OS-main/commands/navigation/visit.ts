import { CommandDefinition } from "@/commands/types";
import { openCommand } from "./open";

export const visitCommand: CommandDefinition = {
  command: "visit",
  description: "Visit external profile or internal panel",
  category: "navigation",
  usage: "visit <discord|email> or a configured public link",
  execute: (args, ctx) => openCommand.execute(args, ctx),
};
