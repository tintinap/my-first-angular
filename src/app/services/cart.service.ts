import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items:any = [];

  constructor(
    private http:HttpClient
  ) {

  }

  addToCart(product:any) {
    this.items.push(product);
  }

  getItem() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('../../assets/data/shipping.json');
  }


}
