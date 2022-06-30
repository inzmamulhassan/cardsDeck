import { Document } from 'mongoose';
import { SingleCard } from '../schemas/deck.schema';

export interface Deck extends Document {
  readonly type: string;
  readonly shuffle: boolean;
  remaining: number;
  readonly cards: SingleCard[];
  readonly created_at: Date;
}
