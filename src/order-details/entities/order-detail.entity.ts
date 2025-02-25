import { Order } from 'src/orders/entities/order.entity';
import { Product } from 'src/products/entities/product.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToMany,
  JoinColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity({
  name: 'orderDetails',
})
export class OrderDetail {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @OneToOne(() => Order, (order) => order.orderDetail)
  @JoinColumn()
  order: Order;

  @ManyToMany(() => Product, (product) => product.orderDetails)
  products: Product[];
}
