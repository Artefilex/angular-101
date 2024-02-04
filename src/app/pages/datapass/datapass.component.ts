import { Component, Input } from '@angular/core';
import { TwoWayBindingComponent } from '../two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datapass',
  standalone: true,
  imports: [TwoWayBindingComponent ,FormsModule],
  templateUrl: './datapass.component.html',
})
export class DatapassComponent {
@Input() name:string | undefined;
@Input() fullnames:string | undefined;
}
