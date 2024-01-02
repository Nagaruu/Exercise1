// src/app/tong-so.service.ts
import { Injectable } from '@angular/core';
import { Color } from '../enum/color';

@Injectable({
  providedIn: 'root',
})
export class Ex1Service {
  summary(arr: number[]): number {
    let tong: number = 0;
    for (let i = 0; i < arr.length; i++) {
      tong += arr[i];
    }
    return tong;
  }

  showArray<T>(mang: T[]): T | undefined {
    return mang.length > 0 ? mang[0] : undefined;
  }

  showEnum(mau: Color): string {
    return mau;
  }

  factorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * this.factorial(n - 1);
    }
  }

  isPrime(num: number): boolean {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
