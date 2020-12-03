import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { User } from './users.entity';
import { UsersService } from './users.service';
import { Photo } from '../photos/photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Photo])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
