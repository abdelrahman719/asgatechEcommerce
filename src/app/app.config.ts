import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';

import { ProductsComponent } from './Features/products/products.component';
import { CheckoutComponent } from './Features/checkout/checkout.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { OrdersComponent } from './Features/orders/orders.component';



const routes: Routes = [
  { path: '', component: ProductsComponent },

  {
    path: 'checkout', component: CheckoutComponent,
  },
  {
    path: 'orders', component: OrdersComponent,
  },
  { path: '**', component: ProductsComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
  ]
};
