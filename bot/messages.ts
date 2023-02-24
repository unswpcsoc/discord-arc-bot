export default {
  commandImplementationNotFound: (commandName: string) =>
    `Could not find implementation for command ${commandName}.`,
  executingCommand: (commandName: string, userTag: string, userId: string) =>
    `Executing command ${commandName} invoked by @${userTag} (${userId}).`,
  loggedIn: (botTag: string) => `Logged in as ${botTag}.`,
};
