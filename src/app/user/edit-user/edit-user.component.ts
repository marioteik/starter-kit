import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { UserApiService } from '../../service/user-api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  user: User;
  editForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: UserApiService,
    private datepipe: DatePipe
  ) {}

  ngOnInit() {
    let userId = window.localStorage.getItem('editUserId');
    if (!userId) {
      alert('Invalid action.');
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      avatar: ['', Validators.required],
    });
    this.apiService.getUserById(+userId).subscribe((r) => {
      this.editForm.setValue(r.data);
    });
  }

  onSubmit() {
    this.apiService
      .updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        (r) => {
          if (r.updatedAt != null) {
            alert('Usuário Atualizado em: ' + this.datepipe.transform(r.updatedAt, 'dd-MM-yyyy'));
            this.router.navigate(['list-user']);
          } else {
            alert('Ocorreu um problema na atualização !');
          }
        },
        (error) => {
          alert(error);
        }
      );
  }
}
