import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user.model';
import { ListaCrudService } from '../service';

@Component({
  selector: 'app-lista-crud',
  templateUrl: './lista-crud.component.html',
  styleUrls: ['./lista-crud.component.scss'],
})
export class ListaCrudComponent implements OnInit {
  public users: User[];
  public form: FormGroup;
  public user: User;
  public enviado: boolean = false;

  constructor(private service: ListaCrudService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [null],
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      sobrenome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    });

    this.service.getUsers().subscribe((res) => {
      console.log(res);
      this.users = res.map((user) => {
        return new User(user.id, user.nome, user.sobrenome);
      });
    });
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }
  salvar() {
    this.enviado = true;
    if (this.form.valid) {
      this.service.postUser(this.form.value).subscribe(
        (env) => {
          console.log(env);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  atualizar() {
    this.enviado = true;
    if (this.form.value.id && this.form.valid) {
      console.log(this.form.value.id);
      this.service.patchUser(this.form.value).subscribe(
        (env) => {
          console.log(env);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('Validar');
    }
  }
}
