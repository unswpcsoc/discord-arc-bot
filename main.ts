import { createBot } from 'bot/bot';
import {
  Config,
  ConfigVariableNotDefinedError,
  getConfig,
} from 'config/config';
import { ConsoleLogger } from 'logger/console_logger/console_logger';

(async () => {
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

  try {
    const bot = await createBot(config, logger);
    bot.run();
  } catch (err) {
    throw err;
  }
})();
