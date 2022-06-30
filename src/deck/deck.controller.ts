import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DeckService } from './deck.service';
import { CreateDeckDto } from './dto/create-deck.dto';

@Controller('deck')
export class DeckController {
  constructor(private readonly deckService: DeckService) {}

  @Post()
  createTheDeck(@Body() createDeckDto: CreateDeckDto) {
    return this.deckService.createTheDeck(createDeckDto);
  }

  @Get(':id')
  openTheDeck(@Param('id') id: string) {
    return this.deckService.openTheDeck(id);
  }

  @Get(':id/draw:count')
  drawTheDeck(@Param('id') id: string, @Param('count') count: number) {
    return this.deckService.drawTheDeck(id, count);
  }
}
