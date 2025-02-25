import { Injectable } from '@nestjs/common';

import { ProductsRepository } from './products.repository';
import { IProduct } from './product.interface';

@Injectable()
export class ProductsService {
  constructor(private productsRepository: ProductsRepository) {}
  async findAll(page: number, limit: number) {
    const dbProducts = await this.productsRepository.getProducts(page, limit);

    return dbProducts;
  }

  async findById(id: number) {
    const foundProduct = await this.productsRepository.getProductById(id);

    return foundProduct;
  }

  async createProduct(product: IProduct) {
    console.log('Previo al service createProduct');

    const id = await this.productsRepository.createProduct(product);
    return id;
  }

  updateProduct(id: number, product: Partial<IProduct>) {
    return this.productsRepository.updateProduct(id, product);
  }

  removeProduct(id: number) {
    return this.productsRepository.deleteProduct(+id);
  }
  async buyProduct(id: string) {
    const product = await this.productsRepository.getProductById(+id);
    if (product.stock === 0) {
      throw new Error('Out of stock');
    }
    await this.productsRepository.updateProduct(+id, {
      stock: product.stock - 1,
    });
    console.log('Product bought successfully');
    return product.price;
  }
}
