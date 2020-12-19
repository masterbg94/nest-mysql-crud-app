import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from './item.entity';
import { ColorEntity } from '../color/color.entity';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { SizeEntity } from '../size/size.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity, ColorEntity, SizeEntity])],
  providers: [ItemService],
  controllers: [ItemController],
})
export class ItemModule {}
