// Create a Module
var app = angular.module('ContactApp',[]);

// Create a Controller
app.controller('ContactAppCtrl',function($scope,$http) {
    $scope.contactList = null;
    $scope.selectedContact = null;
    $http.get('https://gist.githubusercontent.com/thenaveensaggam/eca8fde1b1fceeeb62936ae3a74a1dae/raw/6e33e9c9882d566d20df506f810e3721a0832644/22082018.json').then(function (response) {
        $scope.contactList = response.data.contacts;
    });

    $scope.selectContact = function(index) {
        $scope.selectedContact = $scope.contactList[index];
    };

});