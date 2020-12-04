import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemEntity } from './item.entity';
import { ItemDto } from './itemDto';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemEntity)
    private itemRepository: Repository<ItemEntity>,
  ) {}

  async getAllItems() {
    return await this.itemRepository.find({ relations: ['color'] });
  }

  async create(data: ItemDto) {
    const item = this.itemRepository.create(data);
    await this.itemRepository.save(data);
    return item;
  }
}
