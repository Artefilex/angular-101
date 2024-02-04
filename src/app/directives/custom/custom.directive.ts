import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: true
})
export class CustomDirective {

  constructor(private element:ElementRef) { 

    element.nativeElement.style.color="red"
    // this.element.nativeElement.style.color="red"
  }

}
