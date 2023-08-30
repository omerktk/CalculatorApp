git [https://github.com/omerktk/CalculatorApp]

1. **Create a New Angular Project:**

   Open your terminal and navigate to the directory where you want to create your project. Then, run the following command to create a new Angular project named "CalculatorApp":

   

   ```bash

   ng new CalculatorApp

   ```



2. **Navigate to the Project Directory:**

   After the project is created, navigate to the project folder:



   ```bash

   cd CalculatorApp

   ```



3. **Generate a Calculator Component:**

   Generate a new component named "calculator":



   ```bash

   ng generate component calculator

   ```



4. **Design the Calculator UI:**

   Open the `calculator.component.html` file located in the `src/app/calculator` folder. Replace the contents with the following code:



   ```html

   <div class="calculator">

     <input type="text" [(ngModel)]="result" disabled />

     <div class="buttons">

       <button (click)="appendToResult('1')">1</button>

       <button (click)="appendToResult('2')">2</button>

       <button (click)="appendToResult('+')">+</button>

       <button (click)="calculate()">=</button>

       <button (click)="clear()">C</button>

     </div>

   </div>

   ```



5. **Style the Calculator:**

   Open the `calculator.component.css` file located in the `src/app/calculator` folder. Add some basic styles:



   ```css

   .calculator {

     text-align: center;

     margin: 20px;

   }



   .buttons button {

     width: 50px;

     height: 50px;

     margin: 5px;

   }

   ```

6. **Implement Component Logic:**

   Open the `calculator.component.ts` file located in the `src/app/calculator` folder. Replace the contents with the following code:



   ```typescript

   import { Component } from '@angular/core';



   @Component({

     selector: 'app-calculator',

     templateUrl: './calculator.component.html',

     styleUrls: ['./calculator.component.css']

   })

   export class CalculatorComponent {

     result: string = '';



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



     clear() {

       this.result = '';

     }

   }

   ```



7. **Import FormsModule:**

   Open the `app.module.ts` file located in the `src/app` folder. Import `FormsModule` from `@angular/forms` and add it to the `imports` array:



   ```typescript

   import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'; // Add this line



import { AppComponent } from './app.component';

import { CalculatorComponent } from './calculator/calculator.component';



@NgModule({

  declarations: [

    AppComponent,

    CalculatorComponent

  ],

  imports: [

    BrowserModule,

    FormsModule // Add this line

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }


   ```



8. **Add Calculator Component to App Component:**

   Open the `app.component.html` file located in the `src/app` folder. Replace its contents with the following code:



   ```html

   <div>

     <h1>Simple Calculator</h1>

     <app-calculator></app-calculator>

   </div>

   ```



9. **Run the Application:**

   In the terminal, make sure you're in the project directory (`CalculatorApp`) and run the development server:



   ```bash

   ng serve

   ```



   Open your web browser and go to `http://localhost:4200/` to see your simple calculator application.



That's it! You've created a basic calculator application using Angular. You can enhance and customize it further according to your needs.