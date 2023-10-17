import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
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
    // private formBulder: FormBuilder,
    private dataService: DataService,
  ) {
    this.items = this.cartService.getItem();

    // this.checkOutForm = this.formBulder.group({
    //   name: '',
    //   address: ''
    // });
  }

  ngOnInit() {
    this.items = this.cartService.getItem();
  }


  // onSubmit(customerData:any) {
  //   console.warn('your order has been submitted', customerData);

  //   this.items = this.cartService.clearCart();
  //   this.checkOutForm.reset();

  // }
  onSubmit2(customerForm:NgForm) {
    console.warn('!!!!!!2:your order has been submitted', customerForm);
    console.log(customerForm.value)
    this.dataService.postData(customerForm.value).subscribe(
      (response: any) => {
        this.cartService.getItem();
        customerForm.reset()
      },
      (error: HttpErrorResponse) => {
        customerForm.reset();
        // alert(error.message);
        console.log(error.message)
      }
    )
    this.items = this.cartService.clearCart();
    this.checkOutForm.reset();

  }
}
