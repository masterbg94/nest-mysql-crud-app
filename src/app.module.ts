import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './photos/photo.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, PhotoModule, CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
