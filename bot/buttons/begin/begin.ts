import { ButtonBuilder, ButtonStyle } from 'discord.js';
import type { Button } from 'bot/buttons/types';
import messages from './messages';

const CUSTOM_ID = 'begin';

export default {
  customId: CUSTOM_ID,
  data: new ButtonBuilder()
    .setCustomId(CUSTOM_ID)
    .setStyle(ButtonStyle.Primary)
    .setLabel(messages.buttonLabel()),
  execute: async (session, interaction) => {},
} as Button;
