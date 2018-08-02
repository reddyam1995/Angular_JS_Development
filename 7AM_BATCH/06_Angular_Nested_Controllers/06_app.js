// Create an Angular Module
var app = angular.module('NestedApp',[]);

// Create a Parent Controller
app.controller('ParentCtrl',function ($scope) {
    $scope.text = '';
});

// Create a Child Controller
app.controller('ChildCtrl',function ($scope) {
    //$scope.text = '';
});
