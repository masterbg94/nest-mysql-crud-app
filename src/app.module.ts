import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './photos/photo.module';
import { CompanyModule } from './company/company.module';
import { CategoryModule } from './category/category.module';
import { ItemModule } from './item/item.module';
import { ColorModule } from './color/color.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    PhotoModule,
    CompanyModule,
    CategoryModule,
    ItemModule,
    ColorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
