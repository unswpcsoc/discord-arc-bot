import { Config, ConfigVariableNotDefinedError, getConfig } from '@config';
import { ConsoleLogger } from '@logger/console_logger';
import { Client, Events, GatewayIntentBits } from 'discord.js';
import { registerCommands } from './register_commands';

const main = async () => {
  const logger = new ConsoleLogger();

  let config: Config;
  try {
    config = getConfig();
  } catch (err) {
    if (err instanceof ConfigVariableNotDefinedError) {
      logger.error(err.message);
    } else {
      throw err;
    }
    process.exit(1);
  }

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
