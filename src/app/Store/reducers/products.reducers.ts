import {  createReducer, on } from '@ngrx/store';
import { product } from '../../Core/interfaces/product.interface';
import { editProductQuantity, setProducts } from '../actions/products.actions';


export interface State {
products:product[]
}

export const initialState: State = {
    products:[]
  };
   
   
   
  export const productsReducer = createReducer(
    initialState,
    on(setProducts, (state ,{products}) => ({ ...state,products: products })),
    on(editProductQuantity, (state ,{productId, quantity}) => ({ ...state, 
      products: state.products.map(product =>
      product.ProductId === productId ? { ...product, AvailablePieces: quantity } : product
    ) })),

  );
   