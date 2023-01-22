import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../../services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private usuarioService: UserService, private formBuilder: FormBuilder) { }

  loginForm = this.formBuilder.group({
    email: '',
    senha: ''
  })

  onSubmit() {
    this.usuarioService.login(
      this.loginForm.value.email ?? "",
      this.loginForm.value.senha ?? ""
    );
  }
}
