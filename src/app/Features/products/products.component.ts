import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Core/services/products.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { product } from '../../Core/interfaces/product.interface';
import { AppState } from '../../Store/app.state';
import { Store } from '@ngrx/store';
import { setProducts } from '../../Store/actions/products.actions';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../Core/services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    HttpClientModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  productsList: product[] = []
  newQuantity: any;
  tempId: any;
  constructor(private productsService: ProductsService,
    private store: Store<AppState>,
    private cartService :CartService
  ) {
    this.store.select('products').subscribe((products) => {
      this.productsList = products['products']
    })
    this.productsService.getProductsWithDispatch()

  }

  ngOnInit(): void {


  }
  updateProductQuantity(productId: number, newQuantity: number ,product:product) {
    if (newQuantity !== undefined && newQuantity !== null) {
      this.productsService.editProductQuantity(productId, newQuantity);
      this.cartService.updateProductCountInCart(product, newQuantity);
      this.tempId =0
      this.newQuantity =0
      
    }
  }

  addToCart(product: product, quantity: number): void {
    this.cartService.addProductToCart(product, quantity);
  }



}
