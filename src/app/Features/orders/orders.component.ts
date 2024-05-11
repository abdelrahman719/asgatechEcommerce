import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../Core/services/orders.service';
import { Observable, zip } from 'rxjs';
import { CommonModule } from '@angular/common';
import { UsersServiceService } from '../../Core/services/users-service.service';
import { ProductsService } from '../../Core/services/products.service';

import { order } from '../../Core/interfaces/order.interface';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { AppState } from '../../Store/app.state';
import { Store } from '@ngrx/store';
import { addOrder } from '../../Store/actions/orders.actions';


@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, TableModule, TagModule, ButtonModule, RouterModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
  //orders$: Observable<any[]>;
  finalOrdersList: order[] = []
  first = 0;
  rows = 10;


  constructor(private ordersService: OrdersService,
    private usersService: UsersServiceService,
    private productsService: ProductsService,
    private store: Store<AppState>,
  ) {
    this.store.select('orders').subscribe((orders) => {
      this.finalOrdersList = orders['orders']
    })
  }

  ngOnInit(): void {
    

    this.combineData().subscribe({
      next: ([orders, users, products]) => {
        for (let i = 0; i < orders.length; i++) {
          let tempOrder = orders[i];
          tempOrder.userData = this.usersService.getuserById(tempOrder['UserId'], users)
          tempOrder.totalPrice = this.productsService.getTotalPrice(orders[i].Products, products)
          tempOrder.ProductsWithDetails = this.productsService.attchProductDetails(orders[i].Products, products)
          this.store.dispatch(addOrder({ order: tempOrder }));
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



  formatDate(dateString: string) {
    return dateString.slice(0, 15);

  }







}
