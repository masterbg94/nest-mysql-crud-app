import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SizeEntity } from './size.entity';
import { Repository } from 'typeorm';
import { SizeDto } from './sizeDto';

@Injectable()
export class SizeService {
  constructor(
    @InjectRepository(SizeEntity)
    private sizeRepository: Repository<SizeEntity>,
  ) {}

  async getAllItems() {
    return await this.sizeRepository.find();
  }

  async getAllItemsForId(colorId) {
    return await this.sizeRepository.findOne(colorId);
  }

  async create(data: SizeDto) {
    const size = this.sizeRepository.create(data);
    await this.sizeRepository.save(data);
    return size;
  }

  async delete(id: string) {
    return await this.sizeRepository.delete(id);
  }

  async update(id: number, data: Partial<SizeDto>) {
    await this.sizeRepository.update({ id }, data);
    return await this.sizeRepository.findOne({ id });
  }
}
