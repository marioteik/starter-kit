import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Todo } from '../todo.model';

const routes = {
  todos: () => '/todos',
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[];

  constructor(private httpClient: HttpClient) {
    this.todos = [];
  }

  getTodos() {
    if (this.todos.length > 0) {
      return of(this.todos);
    }
    return this.httpClient.get(routes.todos()).pipe(
      tap((todos) => (this.todos = todos as Array<Todo>)),
      catchError(() => of('Erro ao buscar todos'))
    );
  }

  getTodo(id: number) {
    return this.httpClient.get(routes.todos() + `/${id}`).pipe(catchError(() => of('Erro ao buscar todos')));
  }

  getTodoCached(id: number): Todo {
    let todoCached;
    this.todos.forEach((todo: Todo, index: number) => {
      if (todo.id == id) {
        if (todo.cached) {
          todoCached = todo;
        }
      }
    });
    return todoCached;
  }

  updateTodoCached(todoUpdated: Todo) {
    this.todos.forEach((todo: Todo, index: number) => {
      if (todo.id == todoUpdated.id) {
        this.todos[index] = todoUpdated;
      }
    });
  }

  removeTodoCached(todoRemoved: Todo) {
    this.todos.forEach((todo: Todo, index: number) => {
      if (todo.id == todoRemoved.id) {
        this.todos.splice(index, 1);
      }
    });
  }

  addTodo(text: string) {
    return this.httpClient.post(routes.todos(), { title: text });
  }

  saveTodo(todo: Todo) {
    return this.httpClient.put(routes.todos() + `/${todo.id}`, todo);
  }

  delTodo(id: number) {
    return this.httpClient.delete(routes.todos() + `/${id}`);
  }
}
