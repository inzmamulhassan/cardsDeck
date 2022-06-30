import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDeckDto } from './dto/create-deck.dto';
import { Deck } from './interfaces/deck.interface';
import { SingleCard } from './schemas/deck.schema';

const suits = {
  SPADES: 'S',
  HEARTS: 'H',
  CLUBS: 'C',
  DIAMONDS: 'D',
};

@Injectable()
export class DeckService {
  constructor(@InjectModel('Deck') private readonly deckModel: Model<Deck>) {}

  createTheDeck(@Body() createDeckDto: CreateDeckDto): Promise<Deck> {
    const deck = this.deckCreate(createDeckDto);
    const createdCat = new this.deckModel(deck);
    return createdCat.save();
  }

  async openTheDeck(id): Promise<Deck> {
    return await this.deckModel.findById(id).exec();
  }

  async drawTheDeck(id, count): Promise<SingleCard[]> {
    const deck = await this.deckModel.findById(id).exec();
    if (deck.remaining < count) {
      throw new HttpException(
        'You only have ${deck.remaining} cards remaining in your deck',
        HttpStatus.CONFLICT,
      );
    }
    const response = deck.cards.splice(0, count);
    deck.remaining = deck.remaining - count;
    this.deckModel.findByIdAndUpdate({ _id: id }, deck, { new: true }).exec();
    return response;
  }

  deckShuffle = (deck: Array<any>) => {
    for (let index = deck.length - 1; index > 0; index--) {
      const swapIndex = Math.floor(Math.random() * index);
      const temp = deck[index];
      deck[index] = deck[swapIndex];
      deck[swapIndex] = temp;
    }
    return deck;
  };

  deckCreate = (createDeckDto: CreateDeckDto) => {
    let decksShortestard = 2;
    createDeckDto.remaining = 52;
    if (createDeckDto?.type?.toLowerCase() === 'short') {
      decksShortestard = 6;
      createDeckDto.remaining = 36;
    }
    const cards = [];
    Object.entries(suits).forEach(([key, value]) => {
      for (let iterator = decksShortestard; iterator <= 14; iterator++) {
        let cardNumber = iterator.toString();
        let cardName = iterator.toString();

        if (iterator === 11) {
          cardNumber = 'J';
          cardName = 'JACK';
        } else if (iterator === 12) {
          cardNumber = 'Q';
          cardName = 'QUEEN';
        } else if (iterator === 13) {
          cardNumber = 'K';
          cardName = 'KING';
        } else if (iterator === 14) {
          cardNumber = 'A';
          cardName = 'ACE';
        }

        cards.push({
          value: cardName,
          suit: key,
          code: `${cardNumber}${value}`,
        });
      }
    });

    if (createDeckDto?.shuffled) {
      createDeckDto.cards = this.deckShuffle(cards);
    } else {
      createDeckDto.cards = cards;
    }

    return createDeckDto;
  };
}
