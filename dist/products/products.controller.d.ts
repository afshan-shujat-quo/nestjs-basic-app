import { CreateProductDto } from './dto/create-product-dto';
import { Product } from './product.entity';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private productService;
    constructor(productService: ProductsService);
    getAllProducts(): Promise<Product[]>;
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    getTest(): string;
}
