import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Core/services/products.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { product } from '../../Core/interfaces/product.interface';
import { AppState } from '../../Store/app.state';
import { Store } from '@ngrx/store';
import { setProducts } from '../../Store/actions/products.actions';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  providers: [
    HttpClientModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

 productsList:product[]=[]

  constructor(private productsService :ProductsService,
    private store: Store<AppState>,
  ){
    debugger

    this.store.select('products').subscribe((products)=>{
      debugger
      console.log('products: ', products);
      this.productsList = products['products']
    })

    this.productsService.getProductsWithDispatch()

  }

  ngOnInit(): void {
 

      this.getProducts()

  }
  getProducts(){

 

  }

}
