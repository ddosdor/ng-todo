import { Component, OnInit } from '@angular/core';

import { TodoService } from '../shared/todo.service';

import { Todo } from '../shared/todo.model';
import { Todos } from '../shared/mock-todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  selectedTodo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(todos => this.todos = todos);
  }
}
