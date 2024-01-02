import { Component } from '@angular/core';
import { Ex1Service } from './modules/services/ex1.service';
import { Person } from './modules/shared/interface/person';
import { Color } from './modules/enum/color';
import { RectangleService } from './modules/services/rectangle.service';
import { Product } from './modules/shared/interface/product';
import { ProductService } from './modules/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  array: number[] = [1, 2, 3, 4, 5];
  ketQua: number;
  generic: number | undefined;
  color: string | undefined;
  acreage: number | undefined;
  factorial: number | undefined;
  prime: boolean | undefined;
  log: string | undefined;

  products: Product[] | undefined;
  totalValue: number| undefined;
  expensiveProducts: Product[]| undefined;
  productDescriptions: string[]| undefined;
  totalQuantityUnder100: number| undefined;
  discountedProducts: Product[]| undefined;

  constructor(private ex1service: Ex1Service, private rectangle: RectangleService, private productService: ProductService) {
    this.ketQua = this.ex1service.summary(this.array);
    this.generic = this.ex1service.showArray<number>(this.array);
    this.acreage = this.rectangle.showAcreage(10, 20);
    this.factorial = this.ex1service.factorial(5);
    this.prime = this.ex1service.isPrime(13);
    this.log = this.ex1service.greet('Hoa');

    this.products = this.productService.getProducts();
    this.totalValue = this.products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    this.expensiveProducts = this.products.filter(product => product.price > 100);
    this.productDescriptions = this.products.map(product => `Product ${product.name} is ${product.price} dong and ${product.quantity} products.`);
    this.totalQuantityUnder100 = this.products.reduce((acc, product) => {
      return product.price < 100 ? acc + product.quantity : acc;
    }, 0);
    this.discountedProducts = this.productService.getDiscountedProducts(0.1);
  }

  inMau(mau: Color): void {
    this.color = this.ex1service.showEnum(mau);
  }

  person: Person = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  };
}
