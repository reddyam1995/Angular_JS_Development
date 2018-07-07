// Creation of angular Module
var app = angular.module('ContactApp',[]);

// Creation of angular Controller
app.controller('ContactAppCtrl',function($scope,$http) {
    $scope.contactList = null;
    $scope.selectedPerson = null;
    $http.get('db.json').then(function(response) {
        $scope.contactList = response.data.contacts;
    });
    $scope.selectPerson = function(index) {
        $scope.selectedPerson = $scope.contactList[index];
    }

});