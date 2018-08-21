// Create a Module
var app = angular.module('CalculatorApp',[]);

// Create a Controller
app.controller('CalculatorAppCtrl',function() {
    this.firstNumber = null;
    this.secondNumber = null;
    this.operator = '+';
    this.result = 'RESULT';
    this.clearAll = function() {
      this.firstNumber = null;
      this.secondNumber = null;
      this.operator = '+';
      this.result = 'RESULT';
    };
    this.changeOpeartor = function(opr) {
        this.operator = opr;
    };
    this.calculate = function() {
        if(this.firstNumber !== null && this.secondNumber !== null){
            var calc = '';
            switch(this.operator){
                case '+':
                    calc = this.firstNumber + this.secondNumber;
                    break;
                case '-':
                    calc = this.firstNumber - this.secondNumber;
                    break;
                case '*':
                    calc = this.firstNumber * this.secondNumber;
                    break;
                case '/':
                    calc = this.firstNumber / this.secondNumber;
                    break;
                default:
                    calc = 'RESULT';
                    break;
            }
            this.result = calc;
        }
        else{
            this.result = 'RESULT';
        }
    };
});






