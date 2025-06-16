import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productId: string;

  @Column()
  quantity: number;

  @ManyToOne(() => Order, order => order.items, { onDelete: 'CASCADE' })
  order: Order;
}