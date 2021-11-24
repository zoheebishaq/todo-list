import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
// ng model 2
import { FormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [				
    AppComponent,
    TodoComponent,
    HeaderComponent,
      HomeComponent,
      NotFoundComponent,
      SingleTodoComponent,
      ContactComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ng model 1
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
