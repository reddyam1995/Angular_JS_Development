//create a Module
var app = angular.module('ClockApp',[]);

// Create a Controller
app.controller('ClockAppCtrl',function($scope,$interval) {

    var indianClock = function () {
      var today = new Date();
      var options = {timeZone : 'Asia/Kolkata'};
      $scope.indianTime = today.toLocaleTimeString('en-US',options);
      $scope.indianDate = today.toLocaleDateString('en-US',options);
    };
    $interval(indianClock,1000);

});