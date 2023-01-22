import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { InserirUsuarioComponent } from './pages/inserir-usuario/inserir-usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UsuarioDetalhesComponent } from './pages/usuario-detalhes/usuario-detalhes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AuthService } from './services/authService/auth.service';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "cadastro",
    component: CadastroComponent
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthService],
    children: [
      {
        path: "usuarios",
        component: UsuariosComponent
      }
    ]
  },

  {
    path: "usuario/novo",
    component: InserirUsuarioComponent
  },
  {
    path: "usuario/:id",
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
