import { createReducer, on } from '@ngrx/store';
import { order } from '../../Core/interfaces/order.interface';
import { addOrder } from '../actions/orders.actions';

export interface State {
  orders: order[];
}

export const initialState: State = {
  orders: []
};

export const orderReducer = createReducer(
  initialState,

  on(addOrder, (state, { order }) => ({
    ...state,
    orders: [...state.orders, order]
  }))

);
