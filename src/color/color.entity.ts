import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ItemEntity } from '../item/item.entity';

@Entity('colors')
export class ColorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  status: string;

  @ManyToOne(() => ItemEntity, (item) => item.color)
  item: ItemEntity;
}
