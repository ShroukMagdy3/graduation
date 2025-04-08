import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
declare let ScrollReveal: any;
@Component({
  selector: 'app-signup',
  imports: [RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
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
