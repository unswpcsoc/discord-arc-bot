import {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  SlashCommandBuilder,
  User,
} from 'discord.js';
import type { Command } from 'bot/commands/types';
import messages from './messages';
import beginButton from 'bot/buttons/begin/begin';
import clubsHandbookButton from 'bot/buttons/clubs_handbook/clubs_handbook';

export const sendWelcomeAndPrompt = async (user: User, guildName: string) => {
  await user.send({
    embeds: [
      new EmbedBuilder()
        .setTitle(messages.welcomeEmbedTitle(guildName))
        .setDescription(messages.welcomeEmbedDescription()),
      new EmbedBuilder()
        .setTitle(messages.promptEmbedTitle())
        .setDescription(messages.promptEmbedDescription())
        .setColor('Blue'),
    ],
    components: [
      new ActionRowBuilder<ButtonBuilder>()
        .addComponents(beginButton.data)
        .addComponents(clubsHandbookButton.data),
    ],
  });
};

export default {
  data: new SlashCommandBuilder()
    .setName('verify')
    .setDescription(messages.commandDescription()),
  execute: async (session, interaction) => {
    await sendWelcomeAndPrompt(interaction.user, session.guild.name);
  },
} as Command;
