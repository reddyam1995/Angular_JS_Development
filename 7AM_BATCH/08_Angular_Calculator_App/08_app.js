// Create a Module
var app = angular.module('CalcApp',[]);

// Create a Controller
app.controller('CalcAppCtrl',function() {
    this.firstNumber = null;
    this.secondNumber = null;
    this.operator = '+';
    this.results = 'RESULT';
    this.changeOperator = function(symbol) {
        this.operator = symbol;
    };
    this.calculate = function() {
        var num1  = this.firstNumber;
        var num2 = this.secondNumber;
        var opr = this.operator;
        if(num1 !== null && num2 !== null){
            switch(opr){
                case '+':
                    this.results = num1 + num2;
                    break;
                case '-':
                    this.results = num1 - num2;
                    break;
                case '*':
                    this.results = num1 * num2;
                    break;
                case '/':
                    this.results = num1 / num2;
                    break;
                default:
                    this.results = 'RESULT';
                    break;
            }
        }
        else{
            this.results = 'RESULT';
            alert('Dude!! Enter both the numbers');
        }
    };
    this.clear = function() {
        this.firstNumber = null;
        this.secondNumber = null;
        this.operator = '+';
        this.results = 'RESULTS';
    };
});
