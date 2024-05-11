import {  createReducer, on } from '@ngrx/store';
import { product } from '../../Core/interfaces/product.interface';
import { setProducts } from '../actions/products.actions';


export interface State {
products:product[]
}

export const initialState: State = {
    products:[]
  };
  debugger
  debugger
  debugger
  export const productsReducer = createReducer(
    initialState,
    on(setProducts, (state ,{products}) => ({ ...state,products: products })),

  );
  debugger