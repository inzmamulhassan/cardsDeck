import { Module } from '@nestjs/common';
import { DeckService } from './deck.service';
import { DeckController } from './deck.controller';
import { DeckSchema } from './schemas/deck.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Deck', schema: DeckSchema }])],
  controllers: [DeckController],
  providers: [DeckService],
})
export class DeckModule {}
