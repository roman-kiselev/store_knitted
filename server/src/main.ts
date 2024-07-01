import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT;

  const app = await NestFactory.create(AppModule);
  app.enableCors({});
  //app.use(express.json({ limit: '50mb' }));
  //app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));
  const config = new DocumentBuilder()
    .setTitle('Store')
    .setDescription('Api description')
    .setVersion('1.0')
    .addBearerAuth()
    .setExternalDoc('Схема для frontend разработчиков', '/docs-yaml')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      whitelist: true,
      transform: true,
    }),
  );

  await app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
}
bootstrap();
