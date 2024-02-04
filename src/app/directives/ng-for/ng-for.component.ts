import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { User } from '../../models/user';
import { CustomDirective } from '../custom/custom.directive';
import { MyCustomMapDirective } from '../custom/custom-2.directive';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule ,CustomDirective, MyCustomMapDirective],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
 names: string[] = ["baris", "sedef"]
 userList:User[] = [
  {id:1 , name: "baris"},
  {id:2 , name: "sedef"}
 ]
 numbers = [1, 2, 3, 4, 5, 6];
multiplier = (item: number) => item * 2;
 constructor(){
  this.userList.push(new User(3, "ahmet"))
 }
}
