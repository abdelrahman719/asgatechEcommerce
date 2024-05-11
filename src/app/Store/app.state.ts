import { ActionReducerMap } from '@ngrx/store';
import * as productsReducer from './reducers/products.reducers';
import * as cartReducer from './reducers/cart.reducers';
import * as ordersReducer from './reducers/orders.reducers';


export interface AppState {
  products: productsReducer.State;
  cart: cartReducer.State;
  orders: ordersReducer.State;


}

export const appState: ActionReducerMap<AppState, any> = {
  products: productsReducer.productsReducer,
  cart: cartReducer.cartReducer,
  orders: ordersReducer.orderReducer,

};
