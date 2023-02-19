import { Bot } from '@bot';
import { COMMANDS } from '@commands';
import { Config, ConfigVariableNotDefinedError, getConfig } from '@config';
import { ConsoleLogger } from '@logger/console_logger';

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
    const bot = new Bot(config, logger, COMMANDS);
    bot.run();
  } catch (err) {
    console.error('test');
    throw err;
  }
})();
