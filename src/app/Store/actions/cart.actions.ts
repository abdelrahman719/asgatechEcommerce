import { createAction, props } from '@ngrx/store';
import { product } from '../../Core/interfaces/product.interface';

 
export const addToCart = createAction(
  '[Products] addToCart' ,
  props<{product:product , count:number}>()
);

export const updateCardCounter = createAction(
  '[Products] updateCardCounter' ,
  props<{product:product , count:number}>()
);
 