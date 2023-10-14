import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items:any;
  checkOutForm:any;

  constructor(
    private cartService: CartService,
    private formBulder: FormBuilder
  ) {
    this.items = this.cartService.getItem();

    this.checkOutForm = this.formBulder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItem();
  }


  onSubmit(customerData:any) {
    console.warn('your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkOutForm.reset();

  }
}
