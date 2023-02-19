import chalk from 'chalk';
import { Logger } from '@logger';
import messages from './messages';

export class ConsoleLogger implements Logger {
  trace(message: string) {
    console.trace(messages.trace(message));
  }

  debug(message: string) {
    console.debug(chalk.blue(messages.debug(message)));
  }

  info(message: string) {
    console.info(messages.info(message));
  }

  warn(message: string) {
    console.warn(chalk.yellow(messages.warn(message)));
  }

  error(message: string) {
    console.error(chalk.red(messages.error(message)));
  }
}
