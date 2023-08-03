import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { Prices } from 'src/app/models/shipping-prices';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {

  shippingPrices!: Observable<Prices[]>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.shippingPrices = this.cartService.getShippingPrices();
  }
}
