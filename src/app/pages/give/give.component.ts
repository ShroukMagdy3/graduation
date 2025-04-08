import { Component } from '@angular/core';

@Component({
  selector: 'app-give',
  imports: [],
  templateUrl: './give.component.html',
  styleUrl: './give.component.css'
})
export class GiveComponent {
  item = {
    name: '',
    category: '',
    description: '',
    image: ''
  };
  submitted = false;



  submitForm() {
    this.submitted = true;
    console.log('Submitted Item:', this.item);
  }
}
