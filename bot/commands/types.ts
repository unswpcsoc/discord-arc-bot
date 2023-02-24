import type { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import { Session } from 'bot/session';

export interface Command {
  data: SlashCommandBuilder;
  execute: (session: Session, interaction: CommandInteraction) => Promise<void>;
}
