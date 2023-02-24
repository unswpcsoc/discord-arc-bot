import {
  Collection,
  CommandInteraction,
  RESTPutAPIApplicationCommandsResult,
  Routes,
} from 'discord.js';
import ping from 'bot/commands/ping/ping';
import verify from 'bot/commands/verify/verify';
import { Session } from 'bot/session';
import messages from './messages';
import type { Command } from './types';

export type { Command };

export const COMMANDS = new Collection(
  [ping, verify].map((command) => [command.data.name, command]),
);

export const registerCommands = async (
  session: Session,
  commands: Command[],
) => {
  try {
    session.logger.info(messages.registeringCommands(commands.length));

    const data = (await session.client.rest.put(
      Routes.applicationCommands(session.config.DISCORD_APPLICATION_ID),
      { body: commands.map((command) => command.data.toJSON()) },
    )) as RESTPutAPIApplicationCommandsResult;

    session.logger.info(messages.registeredCommands(data.length));
  } catch (err) {
    throw err;
  }
};
