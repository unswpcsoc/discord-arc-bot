import type { ButtonBuilder, ButtonInteraction } from 'discord.js';
import { Session } from 'bot/session';

export interface Button {
  customId: string;
  data: ButtonBuilder;
  execute: (session: Session, interaction: ButtonInteraction) => Promise<void>;
}
