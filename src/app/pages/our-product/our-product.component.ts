import { Component } from '@angular/core';

@Component({
  selector: 'app-our-product',
  imports: [],
  templateUrl: './our-product.component.html',
  styleUrl: './our-product.component.css'
})
export class OurProductComponent {
  isFilterVisible: boolean = true;

  toggleFilter() {
    this.isFilterVisible = !this.isFilterVisible;
  }

}
