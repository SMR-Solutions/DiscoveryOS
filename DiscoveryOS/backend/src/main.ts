import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app/app.module';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter';
import { ValidationPipe as CustomValidationPipe } from './common/pipes/validation.pipe';
import { AppLogger } from './common/logger/app-logger.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: new AppLogger(),
  });

  const configService = app.get(ConfigService);
  const config = configService.get('default') || {};

  // Get configuration values with fallbacks
  const port = (config as any)?.port || parseInt(process.env.PORT || '3000', 10);
  const apiPrefix = (config as any)?.apiPrefix || process.env.API_PREFIX || 'api';
  const corsOrigin = (config as any)?.corsOrigin || process.env.CORS_ORIGIN || 'http://localhost:5173';

  // Enable CORS
  app.enableCors({
    origin: corsOrigin,
    credentials: true,
  });

  // Set global prefix
  app.setGlobalPrefix(apiPrefix);

  // Apply global pipes
  app.useGlobalPipes(new CustomValidationPipe());

  // Apply global exception filter
  app.useGlobalFilters(new GlobalExceptionFilter());

  await app.listen(port, '0.0.0.0', () => {
    const logger = new AppLogger();
    logger.log(
      `Server running on http://localhost:${port}/${apiPrefix}`,
      'Main',
    );
    logger.log(`Health endpoint: http://localhost:${port}/${apiPrefix}/health`, 'Main');
  });
}

bootstrap().catch((err) => {
  const logger = new AppLogger();
  logger.error('Failed to start application', err);
  process.exit(1);
});
