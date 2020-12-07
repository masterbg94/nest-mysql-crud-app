import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ColorService } from './color.service';
import { ColorDto } from './colorDto';

@Controller('color')
export class ColorController {
  constructor(private colorService: ColorService) {}

  @Get()
  async showAll() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.colorService.getAllColors(),
    };
  }

  @Post()
  async create(@Body() data: ColorDto) {
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Color added successfully',
      data: await this.colorService.create(data),
    };
  }

  @Delete(':id')
  async delete(@Param() params) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Successfully deleted',
      data: await this.colorService.delete(params.id),
    };
  }
}
