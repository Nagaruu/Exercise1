// product.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../shared/interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsList: Product[] = [
    { id: 1, name: 'Product A', price: 50, quantity: 2 },
    { id: 2, name: 'Product B', price: 120, quantity: 3 },
    { id: 3, name: 'Product C', price: 80, quantity: 5 },
    { id: 4, name: 'Product D', price: 90, quantity: 1 },
    { id: 5, name: 'Product E', price: 150, quantity: 4 },
  ];

  getProducts(): Product[] {
    return this.productsList;
  }

  getDiscountedProducts(discountRate: number): Product[] {
    return this.productsList.map(product => ({
      ...product,
      price: product.price * (1 - discountRate),
    }));
  }
}
