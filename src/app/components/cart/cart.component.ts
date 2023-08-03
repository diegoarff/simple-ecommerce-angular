import { Component } from '@angular/core';
import { Product } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {}

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }

  clearCart() {
    this.items = this.cartService.clearCart();
  }

  onSubmit(): void {
    if (this.checkoutForm.value.name === '') {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Name is required',
        life: 3000,
      });
      return;
    } else if (this.checkoutForm.value.address === '') {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Address is required',
        life: 3000,
      });
      return;
    }

    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: `Your order has been submitted: ${JSON.stringify(this.items)}`,
      life: 3000,
    });

    this.clearCart();
    this.checkoutForm.reset();
  }
}
