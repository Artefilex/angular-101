import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product  , Type} from '../../models/products';

@Component({
  selector: 'app-ng-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-switch.component.html',
  styleUrl: './ng-switch.component.css'
})
export class NgSwitchComponent {

  product:Product;
  constructor(){
    this.product = new Product(1,"book 1", Type.Big)
  }
}
