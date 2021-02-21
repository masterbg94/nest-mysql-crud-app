import {
  Column,
  Entity,
  JoinColumn,
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

  @Column()
  sale: number;

  @OneToMany(() => ColorEntity, (color) => color.item)
  colors: ColorEntity[];

  @ManyToOne(() => CategoryEntity, (category) => category.items, {
    eager: true,
  })
  @JoinColumn({ name: 'categoryId' })
  category: CategoryEntity;
}
