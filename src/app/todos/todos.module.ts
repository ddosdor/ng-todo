import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NzCheckboxModule  } from 'ng-zorro-antd/checkbox';

import { TodosComponent } from './todos.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [TodosComponent, TodoListComponent, TodoComponent ],
  imports: [
    CommonModule,
    FormsModule,
    NzCheckboxModule
  ],
  exports: [
    TodosComponent,
  ]
})
export class TodosModule { }
