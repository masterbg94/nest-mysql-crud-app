import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ColorEntity } from '../color/color.entity';

@Entity('sizes')
export class SizeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sizeCount: number;

  @Column()
  sizeName: number;

  @ManyToOne(() => ColorEntity, (color) => color.sizes)
  color: ColorEntity;
}
