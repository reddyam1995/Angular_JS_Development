// Create a module
var app = angular.module('CalculatorApp',[]);

// Create a Controller
app.controller('CalculatorAppCtrl',function() {
    this.operator = '+';
    this.firstNumber = '';
    this.secondNumber = '';
    this.results = 'ABC';
    this.changeOperator = function(opr) {
        this.operator = opr.trim();
    };
    this.fetchResults = function() {
        this.firstNumber = parseFloat(this.firstNumber);
        this.secondNumber = parseFloat(this.secondNumber);
        switch(this.operator){
            case '+':
                this.results = this.firstNumber + this.secondNumber;
                break;
            case '-':
                this.results = this.firstNumber - this.secondNumber;
                break;
            case '/':
                this.results = this.firstNumber / this.secondNumber;
                break;
            case '*':
                this.results = this.firstNumber * this.secondNumber;
                break;
           default:
                this.results = "RESULT";
                break;
        }
    };
    this.clearAll = function() {
      this.firstNumber = '';
      this.secondNumber = '';
      this.operator = '+';
      this.results = 'RESULT';
    };
});