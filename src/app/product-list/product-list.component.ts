import { Component } from '@angular/core';
import { products } from '../../assets/data/products';


@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
    products = products;

    share() {
        window.alert('the products have been shared');
    }

    onNotify() {
      window.alert('you will be notified when the product goes on sale');
    }
}
