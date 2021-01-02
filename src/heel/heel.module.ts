import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SizeEntity } from '../size/size.entity';
import { HeelService } from './heel.service';
import { HeelController } from './heel.controller';
import { HeelEntity } from './heel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SizeEntity, HeelEntity])],
  providers: [HeelService],
  controllers: [HeelController],
})
export class HeelModule {}
