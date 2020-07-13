import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NzNotificationService } from 'ng-zorro-antd/notification';

import { Todo } from './todo.model';
import { Todos } from './mock-todos';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private notification: NzNotificationService) { }

  getTodos(): Observable<Todo[]> {
    this.notification.create(
      'success',
      'Lista zadań',
      'Pobrano prawidłowo listę zadań'
    );
    return of(Todos);
  }
}
