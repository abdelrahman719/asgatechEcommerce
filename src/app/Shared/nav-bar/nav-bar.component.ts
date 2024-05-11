import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppState } from '../../Store/app.state';
import { Store } from '@ngrx/store';
import { CartService } from '../../Core/services/cart.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  pickedProducts: number = 0
  constructor(   private store: Store<AppState>,
  ){

      this.store.select('cart').subscribe((products) => {
        let productsList = products['cart']
        if (productsList) {
          this.pickedProducts = 0
          productsList.forEach(obj => {
            this.pickedProducts +=Number(obj.count) 
          })
        }
    
      })
  }

}
