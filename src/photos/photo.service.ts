import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from './photo.entity';
import { Repository } from 'typeorm';
import { PhotoDto } from './photo.dto';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
  ) {}

  async getAllPhotos() {
    return await this.photoRepository.find();
  }

  async create(data: PhotoDto) {
    const user = this.photoRepository.create(data);
    await this.photoRepository.save(data);
    return user;
  }

  async update(id: number, data: Partial<PhotoDto>) {
    await this.photoRepository.update({ id }, data);
    return await this.photoRepository.findOne({ id });
  }
}
