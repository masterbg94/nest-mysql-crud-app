import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ItemEntity } from '../item/item.entity';

@Entity('category')
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => ItemEntity, (item) => item.category)
  items: ItemEntity[];
}
