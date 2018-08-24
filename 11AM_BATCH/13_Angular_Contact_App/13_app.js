// Create a Module
var app = angular.module('ContactApp',[]);

// Create a Controller
app.controller('ContactAppCtrl',function($scope,$http) {
    // Prepare a empty contact List
    $scope.contactList = null;
    $scope.selectedContact = null;
    // Get the contacts data from JSON file
    $http.get('db.json').then(function(response) {
        $scope.contactList = response.data.contacts;
        console.log($scope.contactList);
    });

    // select a specific Contact Object
    $scope.pickupContact = function(index) {
        $scope.selectedContact = $scope.contactList[index];
    };

});