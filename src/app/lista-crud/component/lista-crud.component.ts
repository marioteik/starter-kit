import { ChangeDetectionStrategy, Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user.model';
import { ListaCrudService } from '../service';

@Component({
  selector: 'app-lista-crud',
  templateUrl: './lista-crud.component.html',
  styleUrls: ['./lista-crud.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaCrudComponent implements OnInit {
  @Input()
  public users: User[];
  public form: FormGroup;
  public user: User;
  public enviado: boolean = false;

  constructor(
    private service: ListaCrudService,
    private formBuilder: FormBuilder,
    private changeDetection: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [null],
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      sobrenome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    });

    this.buscarTodos();
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  buscarTodos() {
    this.service.getUsers().subscribe((res) => {
      this.changeDetection.markForCheck();
      this.users = res.map((user) => {
        return new User(user.id, user.nome, user.sobrenome);
      });
    });
  }

  salvar() {
    this.enviado = true;

    if (this.form.value.id) {
      this.atualizar();
    } else if (this.form.valid) {
      this.service.postUser(this.form.value).subscribe(
        (env: User) => {
          this.users.push(new User(env.id, env.nome, env.sobrenome));
          this.changeDetection.markForCheck();
          this.limpar();
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
      this.service.putUser(this.form.value).subscribe(
        (env: User) => {
          this.users.find((u) => {
            if (u.id === env.id) {
              u.nome = env.nome;
              u.sobrenome = env.sobrenome;
            }
          });
          this.changeDetection.markForCheck();
          this.limpar();
        },
        (error) => {
          console.log('Id não existe');
        }
      );
    } else {
      console.log('Informe o Id');
    }
  }

  byNome(i: number, a: any) {
    return a ? a.id : undefined;
  }

  limpar() {
    this.form.reset();
  }
}
