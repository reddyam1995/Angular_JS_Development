// Creation of Module
var app = angular.module('NestedApp',[]);

// Creation of Parent Controller
app.controller('ParentCtrl',function($scope) {
    $scope.test = '';
});

// Creation of Child Controller
app.controller('ChildCtrl',function($scope) {
    // No test variable defined here
});