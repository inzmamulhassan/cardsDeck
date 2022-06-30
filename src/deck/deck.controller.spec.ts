import { Test, TestingModule } from '@nestjs/testing';
import { randomUUID } from 'crypto';
import { DeckController } from './deck.controller';
import { DeckService } from './deck.service';

describe('DeckController', () => {
  let controller: DeckController;

  const mockDeckService = {
    createTheDeck: jest.fn((dto) => {
      return {
        _id: randomUUID(),
        remaining: dto.remaining,
        shuffled: dto.shuffled,
        type: dto.type,
        cards: [],
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeckController],
      providers: [DeckService],
    })
      .overrideProvider(DeckService)
      .useValue(mockDeckService)
      .compile();

    controller = module.get<DeckController>(DeckController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create deck', () => {
    it('should return a Deck', async () => {
      return expect(
        await controller.createTheDeck({
          type: 'FULL',
          shuffled: false,
          cards: undefined,
          created_at: undefined,
          remaining: 52,
        }),
      ).toEqual({
        _id: expect.any(String),
        shuffled: false,
        type: 'FULL',
        cards: expect.any(Array),
        remaining: 52,
      });
    });
  });
});
