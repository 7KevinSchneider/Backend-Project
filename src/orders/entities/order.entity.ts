import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { OrderDetail } from 'src/order-details/entities/order-detail.entity';

@Entity({
  name: 'order',
})
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @ManyToOne(() => User, (user) => user.orders_id)
  user_id: User;

  @Column({ type: Date })
  date: Date;

  @OneToOne(() => OrderDetail)
  orderDetail: OrderDetail;
}
