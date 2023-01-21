import { Component, OnInit } from '@angular/core';
import Usuario from '../../models/usuario';
import { UsuariosService } from '../../service/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  usuarios: Usuario[] = [];

  colunasExibidas: string[] = ["Id", "Nome", "Ver"]

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuarios = Array.from(this.usuariosService.carregaUsuarios());
  }
}
