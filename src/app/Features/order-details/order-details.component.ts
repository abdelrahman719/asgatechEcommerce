import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { zip } from 'rxjs';
import { OrdersService } from '../../Core/services/orders.service';
import { UsersServiceService } from '../../Core/services/users-service.service';
import { ProductsService } from '../../Core/services/products.service';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent  {
  orderId:any;
  constructor(private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private usersService: UsersServiceService,
    private productsService: ProductsService,
  ){
    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      const orderId = paramMap.get('id');
      this.orderId = orderId   
      this.getOrderData(orderId)
     })
  }
  order:any;

  combineData() {
    return zip(
      this.ordersService.getOrders(),
      this.usersService.getUsers(),
      this.productsService.getProducts()
    );
  }
  getOrderData(orderId:number | any){
    this.combineData().subscribe({
      next: ([orders, users, products]) => {
        for (let i = 0; i < orders.length; i++) {
          if(orderId == orders[i]['OrderId']){

             this.order = orders[i];
            this.order.userData = this.usersService.getuserById(this.order['UserId'], users)
            this.order.totalPrice = this.productsService.getTotalPrice(orders[i].Products, products)
            this.order.ProductsWithDetails =this.productsService.attchProductDetails(orders[i].Products, products)
           
          }
        }
      },
      error: error => {
        console.error('Err:', error);
      }
    });
  }



}
