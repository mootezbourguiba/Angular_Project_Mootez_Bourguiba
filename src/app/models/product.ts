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
    id: number = 0,
    name: string = '',
    image: string = '',
    categoryId: number = 0,
    description: string = '',
    price: number = 0,
    brand: string = '',
    promotion: number = 0
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
