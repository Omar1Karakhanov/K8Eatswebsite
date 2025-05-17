

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItems = new BehaviorSubject<any[]>(this.loadCartFromStorage());
  cartItems$ = this.cartItems.asObservable();

  constructor() {
    this.cartItems.subscribe(items => {
      localStorage.setItem('cart', JSON.stringify(items));
    });
  }

  private loadCartFromStorage(): any[] {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  }

  addToCart(product: any) {
    const current = this.cartItems.value;
    const existing = current.find(item => item.id === product.id);
    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1;
    } else {
      current.push({ ...product, quantity: 1 });
    }
    this.cartItems.next([...current]);
  }

  getItems() {
    return this.cartItems.value;
  }

  delete(product: any) {
    const updated = this.cartItems.value.filter(item => item.id !== product.id);
    this.cartItems.next(updated);
  }

  incrementQuantity(productId: number) {
    const updated = this.cartItems.value.map(item => {
      if (item.id === productId) {
        item.quantity = (item.quantity || 1) + 1;
      }
      return item;
    });
    this.cartItems.next(updated);
  }

  decrementQuantity(productId: number) {
    const updated = this.cartItems.value.map(item => {
      if (item.id === productId && item.quantity > 1) {
        item.quantity -= 1;
      }
      return item;
    });
    this.cartItems.next(updated);
  }

  getTotal(): number {
    return this.cartItems.value.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  }
}

