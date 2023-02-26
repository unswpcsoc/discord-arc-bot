import { SlashCommandBuilder } from 'discord.js';
import type { Command } from 'bot/commands/types';
import messages from './messages';

export default {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription(messages.commandDescription()),
  execute: async (session, interaction) => {
    await interaction.reply(messages.response());
  },
} as Command;
