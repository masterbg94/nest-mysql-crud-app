import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HeelEntity } from './heel.entity';
import { Repository } from 'typeorm';
import { HeelDto } from './heelDto';

@Injectable()
export class HeelService {
  constructor(
    @InjectRepository(HeelEntity)
    private heelRepository: Repository<HeelEntity>,
  ) {}

  async getAllHells() {
    return await this.heelRepository.find();
  }

  async getAllItemsForId(heelId) {
    return await this.heelRepository.findOne(heelId);
  }

  async create(data: HeelDto) {
    const size = this.heelRepository.create(data);
    await this.heelRepository.save(data);
    return size;
  }

  async delete(id: string) {
    return await this.heelRepository.delete(id);
  }

  async update(id: number, data: Partial<HeelDto>) {
    await this.heelRepository.update({ id }, data);
    return await this.heelRepository.findOne({ id });
  }
}