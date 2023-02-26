import { Collection } from 'discord.js';
import begin from 'bot/buttons/begin/begin';
import type { Button } from './types';

export type { Button };

export const BUTTONS = new Collection(
  [begin].map((button) => [button.customId, button]),
);
