import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { IProduct } from './product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @HttpCode(200)
  @Get()
  findAll(@Query('page') page: string, @Query('limit') limit: string) {
    if (page && limit) return this.productsService.findAll(+page, +limit);

    return this.productsService.findAll(1, 5);
  }

  @HttpCode(200)
  @Get(':id')
  findById(@Param(':id') id: string) {
    return this.productsService.findById(+id);
  }

  @HttpCode(201)
  @Post()
  async addProduct(@Body() product: IProduct) {
    console.log('Se ejecuto el controller addProduct');

    const id = await this.productsService.createProduct(product);
    return id;
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() product: Partial<IProduct>) {
    return this.productsService.updateProduct(+id, product);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.productsService.removeProduct(+id);
  }
}
