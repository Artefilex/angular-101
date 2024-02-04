import { Directive, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appMyCustomMap]',
  standalone: true,
 
})
export class MyCustomMapDirective implements OnChanges {
  @Input() appMyCustomMap!: any[];
  @Input() mapFunction!: (value: any, index: number, array: any[]) => any;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appMyCustomMap']) {
      this.mapArray();
    }
  }

  private mapArray(): void {
    if (!this.appMyCustomMap || !this.mapFunction) {
      return;
    }

    const result = this.appMyCustomMap.map(this.mapFunction);
    this.el.nativeElement.innerHTML = result.map(item => `<li>${item}</li>`).join('');
  }
}