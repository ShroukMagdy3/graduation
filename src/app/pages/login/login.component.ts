import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
declare let ScrollReveal: any;
@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router){}
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


  testNavigation() {
    console.log('Navigating to home...');
    this.router.navigate(['/home']);
  }

}
