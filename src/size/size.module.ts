import { Module } from '@nestjs/common';
import { SizeController } from './size.controller';
import { SizeService } from './size.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SizeEntity } from './size.entity';
import { ColorEntity } from '../color/color.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SizeEntity, ColorEntity])],
  providers: [SizeService],
  controllers: [SizeController],
})
export class SizeModule {}
