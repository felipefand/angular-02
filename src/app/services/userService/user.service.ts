import { Injectable } from '@angular/core';
import Usuario from '../../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  adicionaUsuario(usuario: Usuario) {
    console.log("Adicionr o usuário", usuario);
  }

  login(email: string, senha: string) {
    console.log("Login!!!");
  }

  validaLogin(token: string) {
    console.log("Validado!");
    return true;
  }
}
