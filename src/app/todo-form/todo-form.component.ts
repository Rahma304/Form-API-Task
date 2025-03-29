import { Component, Output ,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  tasks: string[]=[];
  newTask:string ='';
  @Output() taskadded:EventEmitter<string>= new EventEmitter<string>();

  addTask(){
      this.taskadded.emit(this.newTask);
      this.newTask='';
    
  }

}
