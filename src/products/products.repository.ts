import { Injectable } from '@nestjs/common';
import { IProduct } from './product.interface';

@Injectable()
export class ProductsRepository {
  private products: IProduct[] = [
    {
      id: 1,
      name: 'Caja',
      description: 'de madera',
      price: 5,
      stock: 4,
      imgUrl: 'direccionImagen.jpg',
    },
    {
      id: 2,
      name: 'Cajon',
      description: 'de piedra',
      price: 10,
      stock: 2,
      imgUrl: 'FotoCajon.jpg',
    },
  ];

  async getProducts(page: number, limit: number) {
    const start = (page - 1) * limit;
    const end = start + limit;

    const products = this.products.slice(start, end);
    return products;
  }

  async getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }

  async createProduct(product: Omit<IProduct, 'id'>) {
    const id = this.products.length + 1;
    const newProduct = { id, ...product };
    this.products = [...this.products, newProduct];
    return newProduct;
  }

  updateProduct(id: number, product: Partial<IProduct>) {
    const oldProduct = this.products.find((product) => product.id === id);
    if (!oldProduct) return 'El producto no existe';

    const updateProduct = { ...oldProduct, ...product };

    const index = this.products.findIndex((product) => product.id === id);

    this.products[index] = updateProduct;

    return 'producto actualizado';
  }

  deleteProduct(id: number) {
    this.products = this.products.filter((product) => product.id !== id);

    return this.products;
  }
}

// Products

// id:number

// name: string

// description: string

// price: number

// stock: boolean

// imgUrl: string
