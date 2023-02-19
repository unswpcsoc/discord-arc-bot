import { Config, ConfigVariableNotDefinedError, getConfig } from '@config';
import { ConsoleLogger } from '@logger/console_logger';
import { Client, Events, GatewayIntentBits } from 'discord.js';
import { registerCommands } from './register_commands';

const main = async () => {
  const logger = new ConsoleLogger();
  const config = getConfig();

  // registerCommands(config.discordBotToken, config.discordApplicationId);

  // const client = new Client({
  //   intents: [
  //     GatewayIntentBits.DirectMessages,
  //     GatewayIntentBits.GuildMembers,
  //   ],
  // });

  // client.on(Events.ClientReady, () => {
  //   console.log(`Logged in as ${client.user!.tag}!`);
  // });

  // client.on(Events.InteractionCreate, async interaction => {
  //   console.log(interaction);
  //   if (!interaction.isChatInputCommand()) return;
  // });

  // client.login(process.env.DISCORD_BOT_TOKEN!);
};

main();
