import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';
import { Profile } from './typeorm/entities/Profile';
import { Post } from './typeorm/entities/Post';
import { Hashtag } from './typeorm/entities/Hashtag';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      username:'root',
      password:'iMedia@009',
      host:'localhost',
      port:3306,
      database:'nestjs_crud',
      entities:[User, Profile, Post, Hashtag],
      synchronize:true
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
