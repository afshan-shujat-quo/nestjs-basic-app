import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product-dto';
import { Product } from './product.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor (private productService: ProductsService) {}

    @Get()
    getAllProducts(): Promise<Product[]> {
        return this.productService.getAllProducts();
    }

    @Post()
    @UsePipes(ValidationPipe)
    createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
        console.log('description', createProductDto.description);
        return this.productService.createProduct(createProductDto);;
    }

    @Get('/test')
    getTest() {
        return 'test12334455577777777';
    }

}
