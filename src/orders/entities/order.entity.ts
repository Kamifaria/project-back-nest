import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Item } from './iten.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Item, item => item.order, { cascade: true })
  items: Item[];

  @Column()
  totalValue: number;
}