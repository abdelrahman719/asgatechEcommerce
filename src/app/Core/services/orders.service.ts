import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { order } from '../interfaces/order.interface';

const ORDERS_DB_URL = '../../../assets/json-db/orders.json'
@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  constructor(private http : HttpClient) { }

  getOrders(): Observable<order[]> {
    return this.http.get<order[]>(ORDERS_DB_URL);
  }
}
