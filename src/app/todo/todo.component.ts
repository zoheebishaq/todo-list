import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onChangeStatus(i:number){
    this.todos[i].todoStatus =!this.todos[i].todoStatus;
  }

  // todoOne: string = 'Projet 1';
  // todoTwo: string = 'Projet 2';
  // todoThree: string = 'Projet 3';
  // todoFour: string = 'Projet 4';

  todos = [
    {
      todoName:"Projet 1",
      todoStatus:true,
      image:"http://placehold.it/150"
    },
    {
      todoName:"Projet 2",
      todoStatus:true,
      image:"http://placehold.it/150"
    },
    {
      todoName:"Projet 3",
      todoStatus:false,
      image:"http://placehold.it/150"
    },
    {
      todoName:"Projet 4",
      todoStatus:false,
      image:"http://placehold.it/150"
    },
  ]
}
