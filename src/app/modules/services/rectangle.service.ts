// src/app/services/rectangle.service.ts
import { Injectable } from '@angular/core';
import { Rectangle } from '../shared/models/rectangle.model';
@Injectable({
  providedIn: 'root',
})
export class RectangleService {
    showAcreage(width: number, height: number): number {
    const rec = new Rectangle(width, height);
    return rec.calAcreage();
  }
}
