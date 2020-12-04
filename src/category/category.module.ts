import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { ItemEntity } from '../item/item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity, ItemEntity])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
