import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post, Put,
} from '@nestjs/common';
import { SizeService } from './size.service';
import { SizeDto } from './sizeDto';

@Controller('size')
export class SizeController {
  constructor(private sizeService: SizeService) {}

  @Get()
  async getAll() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.sizeService.getAllItems(),
    };
  }

  @Get()
  async getAllForId() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.sizeService.getAllItems(),
    };
  }

  @Post()
  async createSize(@Body() data: SizeDto) {
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Size succesfull added',
      data: await this.sizeService.create(data),
    };
  }

  @Delete(':id')
  async delete(@Param() params) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Successfully deleted',
      data: await this.sizeService.delete(params.id),
    };
  }

  @Put(':id')
  async updatePhoto(
    @Param('id') id: number,
    @Body() data: Partial<SizeDto>,
  ) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Category update successfully',
      data: await this.sizeService.update(id, data),
    };
  }
}
