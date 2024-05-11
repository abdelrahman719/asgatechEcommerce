import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../Store/app.state';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { addOrder } from '../../Store/actions/orders.actions';
import { product } from '../../Core/interfaces/product.interface';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule , InputTextModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  cartItems: any;
  totalPrice:number=0;
  checkoutForm = new FormGroup({
    customerName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    paymentMethod: new FormControl('Cash', Validators.required),

  })

  constructor(private store: Store<AppState>,
    private router: Router
  ) {
    this.store.select('cart').subscribe((cart) => {
      this.cartItems = cart['cart']
    })
    this.cartItems.forEach((item: { product: product, count: number, productDetails: product }) => (
      this.totalPrice += (item.count * item.product.ProductPrice)
    ))
  }

  addOrder() {
    let products: any[] = []
  
    this.cartItems.forEach((item: { product: product, count: number, productDetails: product }) => (
      products.push({
        ProductId: item.product.ProductId,
        Quantity: item.count,
        productDetails: item.product
      })

    ))

    if (this.checkoutForm.valid &&
       this.checkoutForm.value.paymentMethod &&
       this.checkoutForm.value.customerName &&
       this.checkoutForm.value.phone &&
       this.checkoutForm.value.address &&
       this.checkoutForm.value.email 

      ) {
      const orderData = {
        UserId: '',
        OrderId: 0,
        OrderDate: new Date().toISOString(),
        ProductsWithDetails: products,
        Products: products,
        totalPrice: this.totalPrice,
        PaymentType: this.checkoutForm.value.paymentMethod,
        userData: {
          Name: this.checkoutForm.value.customerName,
          Email: this.checkoutForm.value.email,
          Phone: this.checkoutForm.value.phone,
          Address: this.checkoutForm.value.address,
        },
      };

      this.store.dispatch(addOrder({ order: orderData }));
      this.router.navigate(['/','orders'])
    }
  }



}
