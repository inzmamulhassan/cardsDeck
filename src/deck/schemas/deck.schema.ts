import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export interface SingleCard {
  readonly value: string;
  readonly suit: string;
  readonly code: string;
}

@Schema({ _id: true })
export class Deck {
  @ApiProperty()
  @Prop({ default: 'FULL' })
  type: string;

  @ApiProperty()
  @Prop({ default: false })
  shuffled: boolean;

  @ApiProperty()
  @Prop({ default: 52 })
  remaining: number;

  @ApiProperty()
  @Prop({})
  cards: SingleCard[];
}

export const DeckSchema = SchemaFactory.createForClass(Deck);
