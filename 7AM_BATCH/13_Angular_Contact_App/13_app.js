// Create a Module
var app = angular.module('ContactApp',[]);

// Create a Controller
app.controller('ContactAppCtrl',function($scope,$http) {
    $scope.contactList = null;
    $scope.selectedContact = null;
    $http.get('https://gist.githubusercontent.com/thenaveensaggam/1b5afdd40806919933029988e239fe4b/raw/c7a199e4f3db3010a36edba30af4110170e00b0e/7am_batch_data.json').then(function(response) {
        $scope.contactList = response.data.contacts;
        console.log($scope.contactList);
    });
    $scope.selectContact = function(index) {
        $scope.selectedContact = $scope.contactList[index];
    };

});