// Create a Module
var app = angular.module('NestedApp',[]);

// Parent Controller
app.controller('ParentCtrl',function($scope) {
    $scope.test = '';
});

// Child Controller
app.controller('ChildCtrl',function($scope) {
   //$scope.test = '';
});
