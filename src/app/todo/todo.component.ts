import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {

  today!: Date;
  todos!: { todoName: string; todoStatus: boolean; image: string; isModif: boolean; }[];


  constructor(private todoService:TodoService) {

  }

  ngOnInit(): void {
    this.today = this.todoService.today;
    this.todos = this.todoService.todos;
  }
  onChangeModif(i:any){
    this.todoService.onChangeModifService(i)
    
  }
  
  onChangeStatus(i:number){
    this.todoService.onChangeStatusService(i)
  }
 
}
