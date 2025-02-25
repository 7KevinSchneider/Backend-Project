import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Order } from 'src/orders/entities/order.entity';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 20 })
  password: string;

  @Column({ type: 'int' })
  phone: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  country: string;

  @Column({ type: 'varchar', nullable: true })
  address: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  city: string;

  @OneToMany(() => Order, (order) => order.user_id)
  orders_id: Order[];
}
