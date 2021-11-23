import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // ng if 1
  onChangeModif(i:any){
    this.todos[i].isModif = ! this.todos[i].isModif;
  }

  onChangeStatus(i:number){
    this.todos[i].todoStatus =!this.todos[i].todoStatus;
  }

  // todoOne: string = 'Projet 1';
  // todoTwo: string = 'Projet 2';
  // todoThree: string = 'Projet 3';
  // todoFour: string = 'Projet 4';
  today = new Date();

  todos = [
    {
      todoName:"Projet 1",
      todoStatus:true,
      image:"http://placehold.it/150",
      isModif: false,


    },
    {
      todoName:"Projet 2",
      todoStatus:true,
      image:"http://placehold.it/150",
      isModif: false
    },
    {
      todoName:"Projet 3",
      todoStatus:false,
      image:"http://placehold.it/150",
      isModif: false
    },
    {
      todoName:"Projet 4",
      todoStatus:false,
      image:"http://placehold.it/150",
      isModif: false
    },
  ]
}
