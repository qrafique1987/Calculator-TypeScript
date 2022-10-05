import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  operator1: number;
  operator2: number;
  operatorSign = '';
  operatorSet = false;
  inputText1 = '';
  inputText2 = '';
  calcValue = '';
  resultShown = false;
  prevVal = '';

  // when any numeric value is pressed then to set the value in string
   onSelection(key: string) {

    if (key === '+' || key === '-' || key === '/') {
      // to store the previous value entered by user.
      this.prevVal = this.inputText1[this.inputText1.length - 1];
      // to set flag true if user already selected any operatorSign.
      if(this.prevVal === '+' || this.prevVal === '-' || this.prevVal === '/'){
        this.operatorSet = true;
      }
      //this.inputText1 = key;
      // To return in case of any operatorSign in pressed to stop multi operator.
     if (this.operatorSet) {
       return;
      }
      this.operator1 = parseFloat(this.inputText1); // to set nuemeric value in first operand to perform operation.
      this.operatorSign = key; // to store operatorSing to use this variable in later function.
      this.operatorSet = true; // to set operatorset to true as OperatorSign already selected.
    }
    this.inputText1 += key; // to concate the values entered by user using compound assignment.
    this.resultShown = true; // to set flag true to use it later to avoid error while user pressing = sing again and again.
  }

  // function used to perform calculation on the base of user entered values.
  getResult(){
    // to execute only in case if resultshown flag is true, once user pressed = then becomes false.
    if(this.resultShown){
      this.calcValue = this.inputText1; // to store calculation string to shown in second input field.
      this.operator2 = parseFloat(this.inputText1.split(this.operatorSign)[1]); // to set second operand value by using split function.
      if(this.operatorSign === '+'){
        this.inputText1 = (this.operator1 + this.operator2).toString(); // to perform calculation.
        this.inputText2 = this.calcValue; // to store complete calculation string value in lower text field.
      } 
      else if(this.operatorSign === '-'){
        this.inputText1 = (this.operator1 - this.operator2).toString();
        this.inputText2 = this.calcValue;
      }
      else if(this.operatorSign === '/'){
        this.inputText1 = (this.operator1 / this.operator2).toString();
        this.inputText2 = this.calcValue;
      }
      this.resultShown = false;
    }
  }

  getClear(){
    // to reset all the values when user clicks  clr button.
    //if(this.resultShown){
      this.operator1 = 0;
      this.operator2 = 0;
      this.operatorSign = '';
      this.operatorSet = false;
      this.inputText1 = '';
      this.inputText2 = '';
      this.calcValue = '';

    //}

  }

}


