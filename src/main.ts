import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Katana Backend Programming Test')
    .setDescription(
      ` ### Update 17.11.2021
      Added instructions that any NodeJS Typescript framework or custom build is fine.
      Removed any indications to Loopback 4.
      Updated bonus points to include both unit and integration tests.
      Update 14.09.2021
      Changed the deck_id to be deckId to avoid forcing the candidates to suppress ESlint rule that ships with Loopback ( @typescri
      pt-eslint/naming-convention ).
      Added requirement to actually implemented shuffling (made it very clear in the requirement of every endpoint).
      Added requirement for supporting two deck types: 52 (full deck), 32 (short deck; lacking cards from 2-6).
      Updated the CREATE requirements to split request and response.
      Added very broad hint on what the test task is going to be used for.
      Initial version
      Add endpoint for creating a deck.
      Add endpoint for opening a deck.
      Add endpoint for drawing card(s) from the dec.
      `,
    )
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  await app.listen(3000);
}
bootstrap();
