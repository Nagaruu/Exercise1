import { Injectable } from '@angular/core';
import { Rectangle as RectangleInterface } from '../shared/interface/rectangle';

export class Rectangle implements RectangleInterface {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.height = height;
        this.width = width;
      }

    calAcreage(): number {
        return this.width * this.height;
    }

    showAcreage(): number {
        return this.calAcreage();
    }
}
  