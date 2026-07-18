export interface IEnvConfig {
  nodeEnv: string;
  port: number;
  apiPrefix: string;
  appName: string;
  appVersion: string;
  logLevel: string;
  corsOrigin: string;
}

export const envConfig = (): IEnvConfig => ({
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3000', 10),
  apiPrefix: process.env.API_PREFIX || 'api',
  appName: process.env.APP_NAME || 'DiscoveryOS API',
  appVersion: process.env.APP_VERSION || '1.0.0',
  logLevel: process.env.LOG_LEVEL || 'debug',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
});
