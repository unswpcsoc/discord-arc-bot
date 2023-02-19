import * as dotenv from 'dotenv';
import { z } from 'zod';
import messages from './messages';

const Config = z.object({
  DISCORD_APPLICATION_ID: z.string(),
  DISCORD_BOT_TOKEN: z.string(),
});

export type Config = z.infer<typeof Config>;

export class ConfigVariableNotDefinedError extends Error {
  constructor(public variableName: string) {
    super(messages.configVariableNotDefined(variableName));
  }
}

export const getConfig = () => {
  dotenv.config();

  try {
    return Config.parse({
      DISCORD_APPLICATION_ID: process.env.DISCORD_APPLICATION_ID,
      DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      const issue = err.issues[0];
      if (issue.code === z.ZodIssueCode.invalid_type) {
        throw new ConfigVariableNotDefinedError(issue.path[0] as string);
      }
    }
    throw err;
  }
};
