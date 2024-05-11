import { Injectable } from '@angular/core';
import { AppState } from '../../Store/app.state';
import { Store } from '@ngrx/store';
import { product } from '../interfaces/product.interface';
import { addToCart, updateCardCounter } from '../../Store/actions/cart.actions';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private store: Store<AppState>) {}

  addProductToCart(product: product, count: number): void {
    this.store.dispatch(addToCart({ product, count }));
  }

  // loadCartProducts(cartItems: { product: product; count: number }[]): void {
  //   this.store.dispatch(getCartProducts({ cart: cartItems }));
  // }

  updateProductCountInCart(product: product, count: number): void {
    this.store.dispatch(updateCardCounter({ product, count }));
  }
}
