// src/app/models/product.ts
export class Product {
  id: number;
  name: string;
  image: string;
  categoryId: number;
  description: string;
  price: number;
  brand: string;
  promotion: number;

  constructor(
    id: number,
    name: string,
    image: string,
    categoryId: number,
    description: string,
    price: number,
    brand: string,
    promotion: number
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.categoryId = categoryId;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.promotion = promotion;
  }
}
