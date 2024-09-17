import { Product } from "../entities/Product";

export interface IProductRepository {
  create(data: any): Promise<Product>;
  update(id: number, stock: number): Promise<Product>;
  find(limit: number, offset: number): Promise<Product[]>;
}
