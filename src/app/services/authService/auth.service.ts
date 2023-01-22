import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../userService/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  token = localStorage.getItem("token") ?? "";

  constructor(private userService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {

    const validado = this.userService.validaLogin(this.token);

    if (validado) {
      return true;
    }
    else
    {
      this.router.navigate(["/login"]);
      return false;
    }
  }

}
