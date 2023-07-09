import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';

import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { url } from 'inspector';

const userMdb = 'gomezandresf';
const passMdb = 'BvBUmke8Vg3eHwZ8CJ5K';
const urlMdb = `mongodb+srv://${userMdb}:${passMdb}@cluster0.inwrllx.mongodb.net/?retryWrites=true&w=majority`;

@Module({
  imports: [
    MongooseModule.forRoot(urlMdb),
    BooksModule, 
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
