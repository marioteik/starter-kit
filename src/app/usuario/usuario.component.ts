import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {
  usuario = {} as Usuario;
  usuarios: Usuario[];

  filtro: string;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuarioService.getUsario().subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
    });
  }

  saveUsuario(form: NgForm) {
    if (this.usuario.id !== undefined) {
      this.usuarioService.updateUsuario(this.usuario).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.usuarioService.saveUsuario(this.usuario).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  deleteUsuario(usuario: Usuario) {
    this.usuarioService.deleteUsuario(usuario).subscribe(() => {
      this.getUsuarios();
    });
  }

  editUsuario(usuario: Usuario) {
    this.usuario = { ...usuario };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getUsuarios();
    form.resetForm();
    this.usuario = {} as Usuario;
  }

  trackById(index: number, usuario: Usuario) {
    return usuario.id;
  }
}
