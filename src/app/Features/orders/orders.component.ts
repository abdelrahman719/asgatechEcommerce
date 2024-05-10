import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../Core/services/orders.service';
import { Observable, zip } from 'rxjs';
import { CommonModule } from '@angular/common';
import { UsersServiceService } from '../../Core/services/users-service.service';
import { ProductsService } from '../../Core/services/products.service';
import { user } from '../../Core/interfaces/user.interface';
import { product } from '../../Core/interfaces/product.interface';
import { order } from '../../Core/interfaces/order.interface';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
  orders$: Observable<any[]>;
  finalOrdersList:order[]=[]


  constructor(private ordersService: OrdersService,
    private usersService: UsersServiceService,
    private productsService: ProductsService,
  ) {
    this.orders$ = this.ordersService.getOrders();
  }

  ngOnInit(): void {

    this.combineData().subscribe({
      next: ([orders, users, products]) => {
        for(let i =0 ;i<orders.length ;i++)
          {
            let tempOrder=orders[i];
            tempOrder.userData = this.usersService.getuserById(tempOrder['UserId'],users)
            tempOrder.totalPrice =this.productsService.getTotalPrice(orders[i].Products,products)
            this.finalOrdersList.push(tempOrder);
          }
      },
      error: error => {
        console.error('Err:', error);
      }
    });
    
  }

  combineData() {
    return zip(
     this.ordersService.getOrders(),
     this.usersService.getUsers(),
     this.productsService.getProducts()
    );
  }

  
  


}
