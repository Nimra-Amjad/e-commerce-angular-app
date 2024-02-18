import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, SellerAuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

@NgModule({
  imports: [FormsModule]
})

export class AppComponent {
  title = 'e-commerce-app';
}
