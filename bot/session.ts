import { Config } from 'config/config';
import { Logger } from 'logger/types';
import { Client, Guild } from 'discord.js';

export type Session = {
  client: Client;
  guild: Guild;
  config: Config;
  logger: Logger;
};
