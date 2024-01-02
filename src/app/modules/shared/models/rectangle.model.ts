import { Injectable } from '@angular/core';

export class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.height = height;
        this.width = width;
      }

    calAcreage(): number {
        return this.width * this.height;
    }
}
  