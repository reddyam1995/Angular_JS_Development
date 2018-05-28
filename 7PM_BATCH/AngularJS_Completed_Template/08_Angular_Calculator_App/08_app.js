var app = angular.module('CalculatorApp',[]);
app.controller('CalculatorCtrl',function () {
    this.firstNumber = "";
    this.secondNumber = "";
    this.operator = '+';
    this.result = "RESULT";
    this.changeOperator = function (opr) {
       this.operator = opr.trim();
    };

    this.fetchResult = function() {
       switch(this.operator){
           case '+':
               this.result = this.firstNumber + this.secondNumber;
               break;
           case '-':
               this.result = this.firstNumber - this.secondNumber;
               break;
           case '*':
               this.result = this.firstNumber * this.secondNumber;
               break;
           case '/':
               this.result = this.firstNumber / this.secondNumber;
               break;
       }
       console.log(this.result);
    };

    this.clear = function() {
        this.firstNumber = "";
        this.secondNumber = "";
        this.operator = '+';
        this.result = "RESULT"
    };
});