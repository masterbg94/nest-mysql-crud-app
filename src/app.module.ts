import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { ItemModule } from './item/item.module';
import { ColorModule } from './color/color.module';
import { SizeModule } from './size/size.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CategoryModule,
    ItemModule,
    ColorModule,
    SizeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
