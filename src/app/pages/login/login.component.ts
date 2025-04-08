import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
declare let ScrollReveal: any;
@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  ngAfterViewInit(): void {
    ScrollReveal().reveal('.reveal', {
      delay: 300,
      distance: '50px',
      duration: 900,
      origin: 'bottom',
      easing: 'ease-in-out'

    });
    ScrollReveal().reveal('.from-left', {
      delay: 500,
      distance: '100px',
      duration: 1500,
      origin: 'left',
      easing: 'ease-in-out',
      reset: true
    });
  }
}
