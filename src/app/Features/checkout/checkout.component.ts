import { Component } from '@angular/core';
import {  Store } from '@ngrx/store';
import { CartItem } from '../../Store/reducers/cart.reducers';
import { Observable } from 'rxjs';
import { product } from '../../Core/interfaces/product.interface';
import { AppState } from '../../Store/app.state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  cartItems:any;

  constructor(private store: Store<AppState>) {


   this.store.select('cart').subscribe((cart) => {
    this.cartItems = cart['cart']
  })
  }




}
