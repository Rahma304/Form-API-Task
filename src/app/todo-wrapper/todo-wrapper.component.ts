import { Component } from '@angular/core';
import { TodoFormComponent } from "../todo-form/todo-form.component";
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from "../todo-list/todo-list.component";

@Component({
  selector: 'app-todo-wrapper',
  imports: [TodoFormComponent, FormsModule, TodoListComponent],
  templateUrl: './todo-wrapper.component.html',
  styleUrl: './todo-wrapper.component.css'
})
export class TodoWrapperComponent {
  tasks: string[] =[];
  addTask(task:string){
    this.tasks.push(task);
  }

}
