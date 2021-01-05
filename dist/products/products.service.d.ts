import { CreateProductDto } from './dto/create-product-dto';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';
export declare class ProductsService {
    private productRepository;
    constructor(productRepository: ProductRepository);
    getAllProducts(): Promise<Product[]>;
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
}
