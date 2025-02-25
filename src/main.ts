import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalLogger } from './middlewares/logger.middleware';
import { CategoriesSeed } from './seeds/categories/categories.seed';
import { ProductsSeed } from './seeds/products/products.seed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(GlobalLogger);
  const categoriesSeed = app.get(CategoriesSeed);
  await categoriesSeed.seed();
  console.log('Se termino la inserción de categorías');

  const productsSeed = app.get(ProductsSeed);
  await productsSeed.seed();
  console.log('Se termino la inserción de productos');
  await app.listen(3000);
}
bootstrap();
