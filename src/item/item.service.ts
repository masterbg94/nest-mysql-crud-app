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
    return await this.itemRepository.find({
      relations: ['colors', 'colors.sizes', 'colors.sizes.heel'],
    });
  }

  async getWithId(id) {
    return await this.itemRepository.findOne(id, {
      relations: ['colors', 'colors.sizes', 'colors.sizes.heel'],
    });
  }

  async getAllWithDetails() {
    const itemsWithDetails = await this.itemRepository
      .createQueryBuilder('items')
      .innerJoinAndSelect('items.colors', 'colors')
      .innerJoinAndSelect('color.sizes', 'sizes')
      .getMany();
    return itemsWithDetails;
  }

  async create(data: ItemDto) {
    const item = this.itemRepository.create(data);
    await this.itemRepository.save(data);
    return item;
  }

  async delete(id: string) {
    return await this.itemRepository.delete(id);
  }

  async update(id: number, data: Partial<ItemDto>) {
    await this.itemRepository.update({ id }, data);
    return await this.itemRepository.findOne({ id });
  }
}
