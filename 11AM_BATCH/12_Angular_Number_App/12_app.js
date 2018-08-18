// Create an Angular Module
var app = angular.module('NumberApp',[]);

// Create a Controller
app.controller('NumberAppCtrl',function($scope){
    $scope.number = null;
    $scope.message = '';
    $scope.numberArray = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
    $scope.getMessage = function() {
        var num = $scope.number;
        var msg = '';
        if(num !== undefined){
            for(var i=0; i<num.length;i++){
                var char = num.charAt(i);
                msg += $scope.numberArray[char] + " ";
            }
            $scope.message = msg;
        }
        else{
            $scope.message = '';
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