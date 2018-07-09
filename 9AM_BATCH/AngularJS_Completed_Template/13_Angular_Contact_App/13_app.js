// Creation of angular Module
var app = angular.module('ContactApp',[]);

// Creation of angular Controller
app.controller('ContactAppCtrl',function($scope,$http) {
    $scope.contactList = null;
    $scope.selectedPerson = null;
    $http.get('https://gist.githubusercontent.com/thenaveensaggam/e04b739aed58dff6301eb1bff23b2455/raw/424d019f2328bceadac5a48372b3526068db144d/ui_data.json').then(function(response) {
        $scope.contactList = response.data.contacts;
    });
    $scope.selectPerson = function(index) {
        $scope.selectedPerson = $scope.contactList[index];
    }

});