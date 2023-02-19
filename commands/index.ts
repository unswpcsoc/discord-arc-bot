import type { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import ping from '@commands/ping';

export interface Command {
  data: SlashCommandBuilder;
  execute: (interaction: CommandInteraction) => Promise<void>;
}

export const COMMANDS: Command[] = [ping];
