import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Usuario from '../../models/usuario';
import { UserService } from '../../services/userService/user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  cadastroForm = this.formBuilder.group({
    nome: "",
    email: "",
    senha: ""
  })

  onSubmit() {
    const usuario = new Usuario(
      this.cadastroForm.value.nome ?? "",
      this.cadastroForm.value.email ?? "",
      this.cadastroForm.value.senha ?? ""
    );
    this.userService.adicionaUsuario(usuario);
  }
}
