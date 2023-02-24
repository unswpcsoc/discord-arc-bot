import { SlashCommandBuilder } from 'discord.js';
import type { Command } from 'bot/commands/types';

export default {
  data: new SlashCommandBuilder()
    .setName('verify')
    .setDescription(
      'Begins the verification process for this server, or resumes from where you left off.',
    ),
  execute: async (session, interaction) => {
    await interaction.reply('Pong!');
  },
} as Command;
