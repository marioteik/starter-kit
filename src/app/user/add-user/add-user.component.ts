import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from '@app/service/user-api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { idText } from 'typescript';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: UserApiService) {}

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      avatar: ['', Validators.required],
    });
  }

  onSubmit() {
    this.apiService.createUser(this.addForm.value).subscribe((r) => {
      if (r.createdAt != null) {
        alert('Usuario Id: ' + r.id + ' Criado com sucesso !');
        this.router.navigate(['list-user']);
      } else {
        alert('Ocorreu um problema na criação do usuario !');
      }
    });
  }
}
