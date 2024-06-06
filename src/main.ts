import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors({
    origin: 'http://localhost:4200',
  });

  // Global Exception Filter
 

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('🍫 Chocolate Factory API')
    .setDescription('API documentation for Willy Wonka Factory')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = configService.get<number>('port');
  await app.listen(port || 3000);
}
bootstrap();
