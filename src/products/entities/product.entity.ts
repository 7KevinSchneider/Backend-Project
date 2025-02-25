import { Category } from 'src/categories/entities/category.entity';
import { OrderDetail } from 'src/order-details/entities/order-detail.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity({
  name: 'products',
})
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'int' })
  stock: number;

  @Column({ type: 'varchar', default: 'imagen_generica.jpg' })
  imgUrl: string;

  @OneToMany(() => Category, (category) => category.product)
  category_id: Category[];

  @ManyToMany(() => OrderDetail)
  @JoinTable()
  orderDetails: OrderDetail[];
}
