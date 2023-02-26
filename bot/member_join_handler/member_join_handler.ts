import { GuildMember } from 'discord.js';
import { Session } from 'bot/session';
import { sendWelcomeAndPrompt } from 'bot/commands/verify/verify';

export const memberJoinHandler = async (
  session: Session,
  member: GuildMember,
) => {
  await sendWelcomeAndPrompt(member.user, session.guild.name);
};
