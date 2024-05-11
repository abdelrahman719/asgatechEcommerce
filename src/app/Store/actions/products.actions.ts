import { createAction, props } from '@ngrx/store';
import { product } from '../../Core/interfaces/product.interface';

debugger
export const setProducts = createAction(
  '[Products] setProducts' ,
  props<{products:product[]}>()
);
debugger