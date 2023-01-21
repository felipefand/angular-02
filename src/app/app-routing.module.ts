import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InserirUsuarioComponent } from './pages/inserir-usuario/inserir-usuario.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UsuarioDetalhesComponent } from './pages/usuario-detalhes/usuario-detalhes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: "usuarios",
    component: UsuariosComponent
  },
  {
    path: "usuario/novo",
    component: InserirUsuarioComponent
  },
  {
    path: "usuarios/:id",
    component: UsuarioDetalhesComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
