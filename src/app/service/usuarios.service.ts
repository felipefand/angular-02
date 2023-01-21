import { Injectable } from '@angular/core';
import Usuario from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios: Set<Usuario> = new Set<Usuario>().add({
    id: 1,
    nome: "Dagoberto",
    email: "dagoberto@gmail.com",
    cpf: "1"
  }).add({
    id: 2,
    nome: "Anguloso",
    email: "anguloso@gmail.com",
    cpf: "2"
  });

  constructor() { }

  carregaUsuarios = () => this.usuarios;

  buscaPorId = (id: number) => Array.from(this.usuarios).find(e => e.id == id);

  insereUsuario = (usuario: Usuario) => this.usuarios.add(usuario);
}
