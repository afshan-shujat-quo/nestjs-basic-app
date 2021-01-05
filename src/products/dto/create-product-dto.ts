import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty() @IsNumber()
    categoryId: number;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty() @IsNumber()
    status: number
}