import { Component } from '@angular/core';
import { Ex1Service } from './modules/services/ex1.service';
import { Person } from './modules/shared/interface/person';
import { Color } from './modules/enum/color';
import { RectangleService } from './modules/services/rectangle.service';
import { LogMethod } from './modules/shared/decorators/log.decorator';

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

  constructor(private ex1service: Ex1Service, private rectangle: RectangleService) {
    this.ketQua = this.ex1service.summary(this.array);
    this.generic = this.ex1service.showArray<number>(this.array);
    this.acreage = this.rectangle.showAcreage(10, 20);
    this.factorial = this.ex1service.factorial(5);
    this.prime = this.ex1service.isPrime(13);
    this.log = this.ex1service.greet('Hoa');
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
