import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private PRODUCTS_DB_URL = '../../../assets/json-db/porducts.json'

  constructor(private http : HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.PRODUCTS_DB_URL);
  }
}
