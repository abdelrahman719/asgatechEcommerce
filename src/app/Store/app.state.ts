import { ActionReducerMap } from '@ngrx/store';
import * as productsReducer from './reducers/products.reducers';


export interface AppState {
  products: productsReducer.State;


}

export const appState: ActionReducerMap<AppState, any> = {
  products: productsReducer.productsReducer,

};
