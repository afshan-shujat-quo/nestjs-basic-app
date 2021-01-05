import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product-dto';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductsService {

    // Service file
    constructor(
        @InjectRepository(ProductRepository)
        private productRepository: ProductRepository
      ) {}

    
    async getAllProducts(): Promise<Product[]> {
        return this.productRepository.find();
    }

    async createProduct(createProductDto: CreateProductDto): Promise<Product> {
        return this.productRepository.createProduct(createProductDto);
    }   

}
