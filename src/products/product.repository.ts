import { EntityRepository, Repository } from "typeorm";
import { CreateProductDto } from "./dto/create-product-dto";
import { Product } from "./product.entity";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

   
    async createProduct(createProductDto: CreateProductDto): Promise<Product> {
        const product = new Product();
        const {name, categoryId, description, status} = createProductDto;
        product.name = createProductDto.name;
        product.description = description;
        product.categoryId = categoryId;
        product.status = status;
        await product.save();
        return product;
    }
}