import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../service/todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  todo: Todo;

  constructor(
    private todoService: TodoService,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = parseInt(params.get('id'));
      let todoCached = this.todoService.getTodoCached(id);
      if (todoCached) {
        this.todo = todoCached;
      } else {
        this.todoService.getTodo(id).subscribe((todo) => {
          this.todo = todo as Todo;
        });
      }
    });
  }

  salvar(title: HTMLInputElement) {
    this.todo.title = title.value;
    this.todo.cached = true;
    this.todoService.saveTodo(this.todo).subscribe(() => {
      this.todoService.updateTodoCached(this.todo);
      this.router.navigate(['/todo']);
    });
  }

  excluir() {
    this.todoService.delTodo(this.todo.id).subscribe(() => {
      this.todoService.removeTodoCached(this.todo);
      this.router.navigate(['/todo']);
    });
  }
}
