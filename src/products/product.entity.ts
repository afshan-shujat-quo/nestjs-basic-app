import { Timestamp } from "rxjs";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Product extends BaseEntity {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
    name: string;

   @Column()
    description: string;
    
   @Column()
    categoryId: number;

   @Column()
    status: number;
  
}