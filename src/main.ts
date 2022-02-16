import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //protection
  // somewhere in your initialization file
  app.use(compression());

  const config = new DocumentBuilder()
    .setTitle('La Pista API Routes')
    .setDescription('www.lapista.rs')
    .setVersion('1.0')
    .addTag('La Pista')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || '3000');
}
bootstrap();
