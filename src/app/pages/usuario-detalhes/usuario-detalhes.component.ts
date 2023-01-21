import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Usuario from '../../models/usuario';
import { UsuariosService } from '../../service/usuarios.service';

@Component({
  selector: 'app-usuario-detalhes',
  templateUrl: './usuario-detalhes.component.html',
  styleUrls: ['./usuario-detalhes.component.css']
})
export class UsuarioDetalhesComponent {

  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuariosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    const usuario = this.usuarioService.buscaPorId(id);
    this.usuario = usuario ?? this.usuario;
  }
}
