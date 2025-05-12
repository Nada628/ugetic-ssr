import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoginForm: boolean = false; 
  loginData = { username: '', password: '', rememberMe: false }; 
  registerData = { email: '', username: '', password: '', confirmPassword: '' }; 

  toggleForm(isLogin: boolean) {
    this.isLoginForm = isLogin;
  }

  onLoginSubmit() {
    console.log('Login Data:', this.loginData);
  }

  onRegisterSubmit() {
    console.log('Register Data:', this.registerData);
  }
}
