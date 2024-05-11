import { createAction, props } from '@ngrx/store';
import { product } from '../../Core/interfaces/product.interface';

 
export const setProducts = createAction(
  '[Products] setProducts' ,
  props<{products:product[]}>()
);
export const editProductQuantity = createAction(
  '[Products] editProductQuantity' ,
  props<{productId:number , quantity:number}>()
);
 