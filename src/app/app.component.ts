import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoWrapperComponent } from "./todo-wrapper/todo-wrapper.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, TodoWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first_mean';
}
