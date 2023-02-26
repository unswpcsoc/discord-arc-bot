import { ButtonBuilder, ButtonStyle } from 'discord.js';
import type { Button } from 'bot/buttons/types';
import messages from './messages';

const CLUBS_HANDBOOK_URL =
  'https://www.arc.unsw.edu.au/clubs/clubshandbook/club-handbook-section-22-2-online-activities-and-procedures';

export default {
  customId: 'clubsHandbook',
  data: new ButtonBuilder()
    .setStyle(ButtonStyle.Link)
    .setLabel(messages.buttonLabel())
    .setURL(CLUBS_HANDBOOK_URL),
  execute: async () => {},
} as Button;
