import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategotyDto } from './categotyDto';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  async show() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.categoryService.get(),
    };
  }

  @Get('/all')
  async showAll() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.categoryService.getAll(),
    };
  }

  @Get('/details')
  async showCategoriesDetailed() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.categoryService.getAllWithDetails(),
    };
  }

  @Post()
  async create(@Body() data: CategotyDto) {
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Category added successfully',
      data: await this.categoryService.createCategory(data),
    };
  }
}
