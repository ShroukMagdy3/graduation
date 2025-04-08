import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-main-layout',
  imports: [FooterComponent, RouterOutlet, NavbarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
