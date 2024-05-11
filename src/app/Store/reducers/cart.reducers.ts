import {  createReducer, on } from '@ngrx/store';
import { product } from '../../Core/interfaces/product.interface';
import { updateCardCounter ,addToCart } from '../actions/cart.actions';

export interface CartItem {
    product: product;
    count: number;
  }
  
  export interface State {
    cart: CartItem[];
    totalCounter: number;
  }
  
  export const initialState: State = {
    cart: [],
    totalCounter: 0
  };
   
   
   
  export const cartReducer = createReducer(
    initialState,
    on(addToCart, (state, { product, count }) => ({
      ...state,
      cart: [...state.cart, { product, count }],
      totalCounter: state.totalCounter + count
    })),

    on(updateCardCounter, (state, { product, count }) => ({
      ...state,
      cart: state.cart.map(cartItem =>
        cartItem.product.ProductId === product.ProductId ? { ...cartItem, count } : cartItem
      ),
      totalCounter: state.cart.reduce((total, item) => total + (item.product.ProductId === product.ProductId ? count : item.count), 0)
    }))
  );
   