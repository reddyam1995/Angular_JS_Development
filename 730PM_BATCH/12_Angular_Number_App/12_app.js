// Create a Module
var app = angular.module('NumberApp',[]);

// Create a Controller
app.controller('NumberAppCtrl',function() {
    this.number = null;
    this.strNumber = '';
    this.array  = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
    this.getStrNumber = function() {
        console.log(this.number);
        if(this.number !== undefined){
            var tempStr = this.number.toString();
            var resultStr = '';
            for(var i=0; i<tempStr.length; i++){
                var ch = parseInt(tempStr.charAt(i));
                resultStr += this.array[ch] + " ";
            }
            this.strNumber = resultStr;
        }
        else{
            this.strNumber = '';
        }
    };
});







app.directive('numbersOnly', function() {
    var directive = {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9-]/g, '');
                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }

    };
    return directive;
});