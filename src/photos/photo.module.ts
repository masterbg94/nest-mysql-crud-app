import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/users.entity';
import { Photo } from './photo.entity';
import { PhotoController } from './photo.controller';
import { PhotoService } from './photo.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Photo])],
  controllers: [PhotoController],
  providers: [PhotoService],
})
export class PhotoModule {}
