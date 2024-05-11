import { createAction, props } from '@ngrx/store';
import { order } from '../../Core/interfaces/order.interface';


export const addOrder = createAction(
  '[Order] addOrder',
  props<{ order: order }>()
);