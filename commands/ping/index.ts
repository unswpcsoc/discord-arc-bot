import { SlashCommandBuilder } from 'discord.js';
import type { Command } from '@commands/shared/types';

export default {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  execute: async (interaction) => {
    await interaction.reply('Pong!');
  },
} as Command;
