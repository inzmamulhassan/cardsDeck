import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeckModule } from './deck/deck.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), DeckModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
