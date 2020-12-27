import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { Repository } from 'typeorm';
import { CategotyDto } from './categotyDto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
  ) {}

  async get() {
    return await this.categoryRepository.find();
  }

  async getAll() {
    return await this.categoryRepository.find({ relations: ['items'] });
  }

  async getAllWithDetails() {
    const getWithDetails = await this.categoryRepository
      .createQueryBuilder('category')
      .innerJoinAndSelect('category.items', 'item')
      .innerJoinAndSelect('item.colors', 'color')
      .innerJoinAndSelect('color.sizes', 'size')
      .getMany();
    return getWithDetails;
  }

  async getHeelForId(categoryId) {
    return await this.categoryRepository.findOne(categoryId);
  }

  async createCategory(data: CategotyDto) {
    const category = this.categoryRepository.create(data);
    await this.categoryRepository.save(data);
    return category;
  }

  async delete(id: string) {
    return await this.categoryRepository.delete(id);
  }

  async update(id: number, data: Partial<CategotyDto>) {
    await this.categoryRepository.update({ id }, data);
    return await this.categoryRepository.findOne({ id });
  }
}
