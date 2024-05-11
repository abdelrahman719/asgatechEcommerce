import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Core/services/products.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { product } from '../../Core/interfaces/product.interface';

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
// products$: Observable<any[]>;
 productsList:product[]=[]

  constructor(private productsService :ProductsService){
   //this.products$ = this.productsService.getProducts();
  }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.productsService.getProducts().subscribe({
      next:(res)=>{
        this.productsList=res
      }
    })
  }

}
