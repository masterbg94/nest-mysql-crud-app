import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ColorEntity } from '../color/color.entity';
import { HeelEntity } from '../heel/heel.entity';

@Entity('sizes')
export class SizeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sizeCount: number;

  @Column()
  sizeName: number;

  @ManyToOne(() => ColorEntity, (color) => color.sizes, {
    onDelete: 'CASCADE',
    eager: true,
  })
  color: ColorEntity;

  @OneToMany(() => HeelEntity, (heel) => heel.size)
  heel: HeelEntity[];
}
