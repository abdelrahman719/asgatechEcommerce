import { ApplicationConfig, isDevMode } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';

import { ProductsComponent } from './Features/products/products.component';
import { CheckoutComponent } from './Features/checkout/checkout.component';
import {  provideHttpClient } from '@angular/common/http';
import { OrdersComponent } from './Features/orders/orders.component';
import {provideAnimations} from '@angular/platform-browser/animations'
import { OrderDetailsComponent } from './Features/order-details/order-details.component';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import * as appState from '../app/Store/app.state';
import { provideStoreDevtools } from '@ngrx/store-devtools'


const routes: Routes = [
  { path: '', component: ProductsComponent },

  {
    path: 'checkout', component: CheckoutComponent,
  },
  {
    path: 'orders', component: OrdersComponent,
  },
  {
    path: 'order-detailes/:id', component: OrderDetailsComponent,
  },
  { path: '**', component: ProductsComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideRouterStore(),
    provideStore(appState.appState),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
