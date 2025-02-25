import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { In, Repository } from 'typeorm';
import { categories } from './categories-mock';

@Injectable()
export class CategoriesSeed {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async seed() {
    // Obtener todas las categorias existentes de una vez
    const existingCategories = await this.categoryRepository.find({
      where: { name: In(categories) },
    });

    //! Usar for... of para asegurar la ejecucion secuencial de las operacion async
    for (const categoryName of categories) {
      //* Verificar si la categoria actual existe en el conjunto de resultados
      if (
        !existingCategories.some((category) => category.name === categoryName)
      ) {
        const category = new Category();
        category.name = categoryName;
        await this.categoryRepository.save(category);
      }
    }
  }
}
