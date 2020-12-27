import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Get(':id')
  async getCategoryWithId(@Param() params) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.categoryService.getHeelForId(params.id),
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

  @Delete('/:id')
  async delete(@Param() params) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Successfully deleted',
      data: await this.categoryService.delete(params.id),
    };
  }

  @Put(':id')
  async updatePhoto(
    @Param('id') id: number,
    @Body() data: Partial<CategotyDto>,
  ) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Category update successfully',
      data: await this.categoryService.update(id, data),
    };
  }
}
