/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config'
import { config } from 'aws-sdk';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*'
  })

  const configService = app.get(ConfigService);

  console.log(configService.get("AWS_ACCESS_KEY_ID"))
  console.log(configService.get("AWS_SECRET_ACCESS_KEY"))

  config.update({
    accessKeyId: configService.get("AWS_ACCESS_KEY_ID"),
    secretAccessKey: configService.get("AWS_SECRET_ACCESS_KEY")
  })

  await app.listen(8000);
}
bootstrap();
