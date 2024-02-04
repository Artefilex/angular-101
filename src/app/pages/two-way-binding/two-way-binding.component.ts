import { Component , Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-binding.component.html',

})
export class TwoWayBindingComponent implements OnChanges{
//  names: string | undefined 
previousValue: string | undefined 
currentValue: string | undefined 
@Input() handleChangesValue: string | undefined
 ngOnChanges(changes: SimpleChanges): void {
  if (changes['handleChangesValue'] && changes['handleChangesValue'].previousValue !== undefined) { 
    this.previousValue = changes['handleChangesValue'].previousValue;
    this.currentValue = changes['handleChangesValue'].currentValue;
    console.log(changes);
    console.log('Önceki Değer:',  this.previousValue, 'Mevcut Değer:',  this.currentValue);
  }
 }
}
