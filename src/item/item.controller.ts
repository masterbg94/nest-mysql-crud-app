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
import { ItemService } from './item.service';
import { ItemDto } from './itemDto';

@Controller('item')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Get()
  async showAll() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.itemService.getAllItems(),
    };
  }

  @Get('/details')
  async showItemsDetailed() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.itemService.getAllWithDetails(),
    };
  }

  /* Mora da ide pre /:param da bi ga nestJs citao */
  @Get('/new')
  async showNewItems() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.itemService.getNewItems(),
    };
  }

  @Get('/:id')
  async showItemWithId(@Param() params) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.itemService.getWithId(params.id),
    };
  }

  @Post()
  async createItem(@Body() data: ItemDto) {
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Item added successfully',
      data: await this.itemService.create(data),
    };
  }

  @Delete(':id')
  async deleteItem(@Param() params) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Successfully deleted',
      data: await this.itemService.delete(params.id),
    };
  }

  @Put(':id')
  async updateItem(@Param('id') id: number, @Body() data: Partial<ItemDto>) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Category update successfully',
      data: await this.itemService.update(id, data),
    };
  }
}
