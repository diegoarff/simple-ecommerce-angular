import { Component } from '@angular/core';
import { Product, products } from 'src/app/models/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];

  share(product: Product) {
    window.alert(product.name + ' has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the price drops!');
  }
}
