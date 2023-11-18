import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-calculator',
  
  templateUrl: './calculator.component.html',
  
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  result: string = '';
  constructor(private authService: AuthService) {}


  appendToResult(value: string) {
    this.result += value;
  }

  calculate() {
    try {
      this.result = eval(this.result);
    } catch (error) {
      this.result = 'Error';
    }
  }

  logout() {
    this.authService.logout();
  }

  clear() {
    this.result = '';
  }
}
