import { BaseEntity } from "typeorm";
export declare class Product extends BaseEntity {
    id: number;
    name: string;
    description: string;
    categoryId: number;
    status: number;
}
