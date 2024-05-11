import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './Shared/nav-bar/nav-bar.component';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , CommonModule ,NavBarComponent ,FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    HttpClientModule,
  
    
  ],
})
export class AppComponent {
  title = 'frontendEcommerce';


}
