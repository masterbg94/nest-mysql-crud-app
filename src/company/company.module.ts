import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/users.entity';
import { CompanyEntity } from './company.entity';
import { CompanyController } from './company.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity, User])],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
