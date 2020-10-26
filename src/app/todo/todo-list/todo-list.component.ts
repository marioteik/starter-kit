import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: any = [];

  constructor(private todoService: TodoService, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
      this.ref.detectChanges();
    });
  }

  addTodo(text: HTMLInputElement) {
    const title = text.value.trim();

    if (title.length > 0) {
      this.todoService.addTodo(title).subscribe((todo: Todo) => {
        this.todos.unshift(todo);
        this.ref.detectChanges();
      });
    }

    text.value = '';
    text.focus();
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
