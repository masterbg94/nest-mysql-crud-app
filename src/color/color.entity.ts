import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ItemEntity } from '../item/item.entity';
import { SizeEntity } from '../size/size.entity';

@Entity('colors')
export class ColorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  status: string;

  @ManyToOne(() => ItemEntity, (item) => item.colors)
  item: ItemEntity;
  //
  @OneToMany(() => SizeEntity, (size) => size.color)
  sizes: SizeEntity[];
}
