import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForComponent } from './ng-for.component';
import { CustomDirective } from '../custom/custom.directive';

describe('NgForComponent', () => {
  let component: NgForComponent;
  let fixture: ComponentFixture<NgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgForComponent, CustomDirective]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
