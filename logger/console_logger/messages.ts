export default {
  trace: (message: string) => `[TRACE] ${message}`,
  debug: (message: string) => `[DEBUG] ${message}`,
  info: (message: string) => `[INFO] ${message}`,
  warn: (message: string) => `[WARN] ${message}`,
  error: (message: string) => `[ERROR] ${message}`,
};
