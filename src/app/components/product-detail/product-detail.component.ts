import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from 'src/assets/data/products';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  index = 0;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(product:any) {
    window.alert('Your product have been added to the cart!');
    this.cartService.addToCart(product);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      this.product = products[Number(params.get('productId'))];
    })
  }


}
