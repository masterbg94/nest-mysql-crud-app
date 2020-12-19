import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryEntity } from '../category/category.entity';
import { ColorEntity } from '../color/color.entity';

@Entity('items')
export class ItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  image: string;

  @OneToMany(() => ColorEntity, (color) => color.item, {
    cascade: ['remove'],
  })
  colors: ColorEntity[];

  @ManyToOne(() => CategoryEntity, (category) => category.items)
  category: CategoryEntity;
}
