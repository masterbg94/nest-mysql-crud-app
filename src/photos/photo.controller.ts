import { Body, Controller, Get, HttpStatus, Param, Patch, Post, Put } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoDto } from './photo.dto';

@Controller('photos')
export class PhotoController {
  constructor(private photoService: PhotoService) {}

  @Get()
  async allUsers() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.photoService.getAllPhotos(),
    };
  }

  @Post()
  async createPhoto(@Body() data: PhotoDto) {
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Photo added sucess',
      data: await this.photoService.create(data),
    };
  }

  @Put(':id')
  async updatePhoto(@Param('id') id: number, @Body() data: Partial<PhotoDto>) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Photo update successfully',
      data: await this.photoService.update(id, data),
    };
  }
}
