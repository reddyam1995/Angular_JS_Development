// Create a Module
var app = angular.module('LoginApp',[]);

// Create a Controller
app.controller('LoginAppCtrl',function($scope) {
    $scope.username = '';
    $scope.email = '';
    $scope.password = '';
    $scope.check = null;
});