import {
  Client,
  Collection,
  Events,
  GatewayIntentBits,
  REST,
  RESTPutAPIApplicationCommandsResult,
  Routes,
} from 'discord.js';
import type { Command } from '@commands';
import { Config } from '@config';
import { Logger } from '@logger';
import messages from './messages';

const GATEWAY_INTENTS = [
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.GuildMembers,
];

export class CommandImplementationNotFoundError extends Error {
  constructor(commandName: string) {
    super(messages.commandImplementationNotFound(commandName));
  }
}

export class Bot {
  private api: REST;
  private client: Client;
  private commands: Collection<string, Command>;

  constructor(
    private config: Config,
    private logger: Logger,
    commands: Command[],
  ) {
    this.api = new REST().setToken(config.DISCORD_BOT_TOKEN);
    this.client = new Client({ intents: GATEWAY_INTENTS });
    this.commands = new Collection();
    commands.forEach((command) => {
      this.commands.set(command.data.name, command);
    });
  }

  public async run() {
    await this.registerSlashCommands();
    await this.runClient();
  }

  private async registerSlashCommands() {
    try {
      this.logger.info(
        `Started refreshing ${this.commands.size} application (/) commands.`,
      );

      const data = (await this.api.put(
        Routes.applicationCommands(this.config.DISCORD_APPLICATION_ID),
        { body: this.commands.map((command) => command.data.toJSON()) },
      )) as RESTPutAPIApplicationCommandsResult;

      this.logger.info(
        `Successfully reloaded ${data.length} application (/) commands.`,
      );
    } catch (err) {
      throw err;
    }
  }

  private async runClient() {
    this.client.on(Events.ClientReady, () => {
      this.logger.info(`Logged in as ${this.client.user!.tag}.`);
    });

    this.client.on(Events.InteractionCreate, async (interaction) => {
      if (!interaction.isChatInputCommand()) {
        return;
      }

      const command = this.commands.get(interaction.commandName);

      if (!command) {
        throw new CommandImplementationNotFoundError(interaction.commandName);
      }

      try {
        this.logger.info(
          messages.executingCommand(
            interaction.commandName,
            interaction.user.id,
          ),
        );
        await command.execute(interaction);
      } catch (err) {
        err;
      }
    });

    await this.client.login(this.config.DISCORD_BOT_TOKEN);
  }
}
