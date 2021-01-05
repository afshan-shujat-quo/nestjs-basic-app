import { Repository } from "typeorm";
import { CreateProductDto } from "./dto/create-product-dto";
import { Product } from "./product.entity";
export declare class ProductRepository extends Repository<Product> {
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
}
