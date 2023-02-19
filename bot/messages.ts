export default {
  commandImplementationNotFound: (commandName: string) =>
    `Could not find implementation for command ${commandName}.`,
  executingCommand: (commandName: string, userId: string) =>
    `Executing command ${commandName} invoked by user ${userId}.`,
};
