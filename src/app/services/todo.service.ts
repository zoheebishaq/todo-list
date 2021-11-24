import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

constructor() { }

 // ng if 1
 onChangeModifService(i:any){
  this.todos[i].isModif = ! this.todos[i].isModif;
}

onChangeStatusService(i:number){
  this.todos[i].todoStatus =!this.todos[i].todoStatus;
}

getTodo(index:number){
  if (this.todos[index]) {
    return this.todos[index]
  }
  return false;
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
