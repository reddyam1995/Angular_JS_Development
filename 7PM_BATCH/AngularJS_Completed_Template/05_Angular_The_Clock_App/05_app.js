var app = angular.module('ClockApp',[]);
app.controller("ClockAppCtrl",function ($scope,$interval) {

    $scope.indianClock = function () {
      var today = new Date();
      var options = { timeZone : 'Asia/Kolkata'};
      $scope.indianTime = today.toLocaleTimeString('en-US',options);
      $scope.indianDate = today.toLocaleDateString('en-US',options);
    };
    $scope.indianClock();
    $interval($scope.indianClock,1000);

    $scope.usClock = function() {
        var today = new Date();
        var options = { timeZone : 'America/New_York'};
        $scope.usTime = today.toLocaleTimeString('en-US',options);
        $scope.usDate = today.toLocaleDateString('en-US',options);
    };
    $scope.usClock();
    $interval($scope.usClock,1000);

    $scope.chinaClock = function() {
        var today = new Date();
        var options = { timeZone : 'Asia/Shanghai'};
        $scope.chinaTime = today.toLocaleTimeString('en-US',options);
        $scope.chinaDate = today.toLocaleDateString('en-US',options);
    };
    $scope.chinaClock();
    $interval($scope.chinaClock,1000);

});