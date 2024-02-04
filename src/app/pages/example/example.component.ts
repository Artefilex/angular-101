import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [],
  templateUrl: './example.component.html',
})
export class ExampleComponent {
 title = "baris"
 users= [
  {id: 1, name: "baris" ,secondname: "tuncdemir"},
  {id: 2, name: "sedef" ,secondname: "bayramhan"},
  {id: 3, name: "ahmet" ,secondname: "cihan"},

 ]
//  one-way binding
 count = 0;
 handleClick = () =>{
 console.log("hello click" )
 }
 IncreaseCounter = () =>{
  return this.count++
 }
}
