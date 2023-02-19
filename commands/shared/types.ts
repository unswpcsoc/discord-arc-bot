import type { CommandInteraction } from 'discord.js';
import { SlashCommandBuilder } from 'discord.js';

export interface Command {
  data: SlashCommandBuilder;
  execute: (interaction: CommandInteraction) => Promise<void>;
}
