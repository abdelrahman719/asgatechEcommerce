import { Component } from '@angular/core';
import { ProductsService } from '../../Core/services/products.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

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
export class ProductsComponent {
 products$: Observable<any[]>;


  constructor(private productsService :ProductsService){
   this.products$ = this.productsService.getProducts();
  }

}
