import {
  ButtonInteraction,
  Client,
  CommandInteraction,
  Events,
  GatewayIntentBits,
  Interaction,
} from 'discord.js';
import { COMMANDS, registerCommands } from 'bot/commands/commands';
import { memberJoinHandler } from 'bot/member_join_handler/member_join_handler';
import { Config } from 'config/config';
import { Logger } from 'logger/types';
import messages from './messages';
import { Session } from './session';

const CLIENT_CONFIG = {
  intents: [GatewayIntentBits.GuildMembers],
};

export class CommandImplementationNotFoundError extends Error {
  constructor(commandName: string) {
    super(messages.commandImplementationNotFound(commandName));
  }
}

export class Bot {
  constructor(private session: Session) {}

  public async run() {
    this.registerClientReadyHandler();
    this.registerMemberJoinHandler();
    await this.registerInteractions();
    await this.session.client.login();
  }

  private registerClientReadyHandler() {
    this.session.client.on(Events.ClientReady, () => {
      this.session.logger.info(
        messages.loggedIn(this.session.client.user!.tag),
      );
    });
  }

  private registerMemberJoinHandler() {
    this.session.client.on(Events.GuildMemberAdd, async (member) => {
      await memberJoinHandler(this.session, member);
    });
  }

  private async registerInteractions() {
    await registerCommands(this.session, Array.from(COMMANDS.values()));

    this.session.client.on(Events.InteractionCreate, async (interaction) => {
      if (interaction.isChatInputCommand()) {
        return await this.tryExecuteCommand(interaction);
      }
      if (interaction.isButton()) {
        return await this.tryExecuteButton(interaction);
      }
    });
  }

  private async tryExecuteCommand(interaction: CommandInteraction) {
    const command = COMMANDS.get(interaction.commandName);

    if (!command) {
      throw new CommandImplementationNotFoundError(interaction.commandName);
    }

    try {
      this.session.logger.info(
        messages.executingCommand(
          interaction.commandName,
          interaction.user.tag,
          interaction.user.id,
        ),
      );
      await command.execute(this.session, interaction);
    } catch (err) {
      throw err;
    }
  }

  private async tryExecuteButton(interaction: ButtonInteraction) {
    // const button = BUTTONS.get(interaction.customId);
    // if (!button) {
    //   throw new ButtonImplementationNotFoundError(interaction.customId);
    // }
  }
}

export const createBot = async (config: Config, logger: Logger) => {
  const client = new Client(CLIENT_CONFIG);
  client.token = config.DISCORD_BOT_TOKEN;
  client.rest.setToken(config.DISCORD_BOT_TOKEN);

  const session: Session = {
    client: client,
    guild: await client.guilds.fetch(config.DISCORD_GUILD_ID),
    config: config,
    logger: logger,
  };

  return new Bot(session);
};
