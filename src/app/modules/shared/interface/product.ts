// product.service.ts
import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
