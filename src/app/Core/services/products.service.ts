import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../interfaces/product.interface';
import { AppState } from '../../Store/app.state';
import { Store } from '@ngrx/store';
import { setProducts } from '../../Store/actions/products.actions';



const PRODUCTS_DB_URL = '../../../assets/json-db/porducts.json'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient,
    private store: Store<AppState>,
  ) { }

  getProducts(): Observable<product[]> {
    return this.http.get<product[]>(PRODUCTS_DB_URL);
  }
  getProductsWithDispatch(){
    debugger
     this.http.get<product[]>(PRODUCTS_DB_URL).subscribe({
      next:(res)=>{
        debugger
        this.store.dispatch(setProducts({products:res}))
      }
    })
  }

  getProductById(productId: number, productsList: product[]) {
    let prod: product[] = productsList.filter(product => product['ProductId'] == productId)
    return prod[0]
  }
  getTotalPrice(
    targetProducts: { "ProductId": number, "Quantity": number }[],
    productsList: product[]
  ) {

    let totalCost = 0
    for (let i = 0; i < targetProducts.length; i++) {
      let tempProduct: product = this.getProductById(targetProducts[i]['ProductId'], productsList)
      totalCost += tempProduct['ProductPrice'] * targetProducts[i]['Quantity']

    }
    return totalCost;

  }
  attchProductDetails(targetProducts: { "ProductId": number, "Quantity": number }[],
    productsList: product[]) {

    let finalProducts: { "ProductId": number, "Quantity": number , "productDetails"?:product }[] = []
    for (let i = 0; i < targetProducts.length; i++) {
      let tempProduct: product = this.getProductById(targetProducts[i]['ProductId'], productsList)
      let targetProductObject:  { "ProductId": number, "Quantity": number , "productDetails"?:product } = targetProducts[i]
      targetProductObject['productDetails'] =tempProduct
      finalProducts.push(targetProductObject)

    }
    return finalProducts

  }

  editProductQuantity(productId:number, quantity:number){

  }
}
