import { Component } from '@angular/core';
import Usuario from '../../models/usuario';
import { UsuariosService } from '../../service/usuarios.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inserir-usuario',
  templateUrl: './inserir-usuario.component.html',
  styleUrls: ['./inserir-usuario.component.css']
})
export class InserirUsuarioComponent {

  usuario: Usuario = new Usuario();

  email = new FormControl('', [Validators.required, Validators.email]);
  nome = new FormControl('', [Validators.required]);
  cpf = new FormControl('', [Validators.required]);

  constructor(private usuarioService: UsuariosService) { }

  getErrorMessage() {
      return 'You must enter a value';
    }

  insereUsuario = () => {
    this.usuario.cpf = this.cpf.value ?? "";
    this.usuario.nome = this.nome.value ?? "";
    this.usuario.email = this.email.value ?? "";

    this.usuarioService.insereUsuario(this.usuario)
  }

}
