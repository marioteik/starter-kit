import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '@app/models/user';
import { IUsers } from '@app/models/users';
import { finalize } from 'rxjs/operators';
import { ExampleService } from './services/example.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.scss'],
})
export class ListExampleComponent implements OnInit, OnDestroy {
  users: Array<IUsers> = [];
  menssagem: string;
  isLoading = false;

  constructor(private exampleService: ExampleService, private router: Router) {}
  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.isLoading = true;
    this.exampleService
      .getUsers()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (u: Array<IUsers>) => (this.users = u),
        (error: string) => (this.menssagem = error)
      );
  }

  onTrashUser(userId: number) {
    this.exampleService.removeUser(userId).subscribe(
      (user: IUser) => {
        this.users = this.users.filter((f) => f.id !== userId);
      },
      (error) => console.warn(error)
    );
  }

  onSearchPlusUser(user: IUser) {
    const userId = user ? user.id : null;
    this.router.navigate([`list-example/user/${userId}/edit`]);
  }
}
