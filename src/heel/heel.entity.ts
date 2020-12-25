import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ItemEntity } from '../item/item.entity';
import { SizeEntity } from '../size/size.entity';

@Entity('heels')
export class HeelEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  heelName: string;

  @Column()
  heelCount: number;

  @ManyToOne(() => SizeEntity, (size) => size.heel, { onDelete: 'CASCADE' })
  size: SizeEntity;
}
