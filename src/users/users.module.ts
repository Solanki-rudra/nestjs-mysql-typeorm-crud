import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Profile } from 'src/typeorm/entities/Profile';
import { Post } from 'src/typeorm/entities/Post';
import { Hashtag } from 'src/typeorm/entities/Hashtag';

@Module({
  imports:[TypeOrmModule.forFeature([User, Profile, Post, Hashtag])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
