import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = ''; // Add this line

  constructor(private authService: AuthService) {}

  login() {
    // Replace with your authentication logic
    if (this.username === 'admin' && this.password === 'admin') {
      this.authService.login();
    } else {
      this.loginError = 'Invalid username or password'; // Set error message
    }
  }
}
