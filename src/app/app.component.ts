import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from './pages/example/example.component';
import { DatapassComponent } from './pages/datapass/datapass.component';
import { TwoWayBindingComponent } from './pages/two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { NgForComponent } from './directives/ng-for/ng-for.component';
import { NgIfComponent } from './directives/ng-if/ng-if.component';
import { NgSwitchComponent } from './directives/ng-switch/ng-switch.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { CustomDirective } from './directives/custom/custom.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , ExampleComponent ,DatapassComponent ,TwoWayBindingComponent ,FormsModule , NgForComponent , NgIfComponent , NgSwitchComponent , NgClassComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 @Input()  fullnames:string | undefined
  title = 'angular-102';
}
