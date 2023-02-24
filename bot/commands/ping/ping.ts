import { SlashCommandBuilder } from 'discord.js';
import type { Command } from 'bot/commands/types';

export default {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  execute: async (session, interaction) => {
    await interaction.reply('Pong!');
  },
} as Command;
