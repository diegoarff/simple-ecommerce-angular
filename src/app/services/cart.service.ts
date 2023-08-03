import { Injectable } from '@angular/core';
import { Product } from '../models/products';
import { Prices } from '../models/shipping-prices';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeFromCart(product: Product) {
    this.items.splice(this.items.indexOf(product), 1);
  }

  getShippingPrices() {
    return this.http.get<Prices[]>(
      '/assets/shipping.json'
    );
  }
}
