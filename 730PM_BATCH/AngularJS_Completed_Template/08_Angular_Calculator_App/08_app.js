// Create a Module
var  app = angular.module('CalculatorApp',[]);

// Create a Controller
app.controller('CalculatorAppCtrl',function() {
    this.firstNumber = null;
    this.secondNumber = null;
    this.operator = '+';
    this.result = 'RESULT';
    this.changeOperator = function(symbol){
        this.operator = symbol;
    };
    this.calculate = function() {
        console.log(this.firstNumber);
        var output = '';
        if(this.firstNumber !== null && this.secondNumber !== null){
            switch(this.operator){
                case '+':
                    output = this.firstNumber + this.secondNumber;
                    break;
                case '-':
                    output = this.firstNumber - this.secondNumber;
                    break;
                case '/':
                    output = this.firstNumber / this.secondNumber;
                    break;
                case '*':
                    output = this.firstNumber * this.secondNumber;
                    break;
                default:
                    output = 'RESULT';
                    break;
            }
            this.result = output;
        }
        else{
            this.result = 'RESULT';
        }
    };
    this.clearAll = function() {
        this.firstNumber = null;
        this.secondNumber = null;
        this.operator = '+';
        this.result = 'RESULT'
    };
});