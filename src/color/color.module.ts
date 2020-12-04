import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from '../item/item.entity';
import { ColorEntity } from './color.entity';
import { ColorService } from './color.service';
import { ColorController } from './color.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity, ColorEntity])],
  providers: [ColorService],
  controllers: [ColorController],
})
export class ColorModule {}
