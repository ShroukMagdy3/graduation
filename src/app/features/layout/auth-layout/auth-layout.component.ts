import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { LoadingComponent } from "../../../pages/loading/loading.component";

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, FooterComponent, NavbarComponent, LoadingComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
