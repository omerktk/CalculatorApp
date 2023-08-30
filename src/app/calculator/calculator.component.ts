// Import the Component decorator and the Component class from '@angular/core'
import { Component } from '@angular/core';

// Use the @Component decorator to define the component's metadata
@Component({
  // The selector defines the HTML tag where the component will be used
  selector: 'app-calculator',
  
  // The templateUrl points to the HTML template for the component
  templateUrl: './calculator.component.html',
  
  // The styleUrls specify the CSS styles for the component
  styleUrls: ['./calculator.component.css']
})
// Define the CalculatorComponent class
export class CalculatorComponent {
  // Initialize the 'result' variable to an empty string
  result: string = '';

  // Method to append a value to the 'result' string
  appendToResult(value: string) {
    this.result += value;
  }

  // Method to perform the calculation and update the 'result'
  calculate() {
    try {
      // Use the 'eval' function to evaluate the expression in 'result'
      // and update 'result' with the calculated value
      this.result = eval(this.result);
    } catch (error) {
      // If an error occurs during evaluation, update 'result' with 'Error'
      this.result = 'Error';
    }
  }

  // Method to clear the 'result' string
  clear() {
    this.result = '';
  }
}
