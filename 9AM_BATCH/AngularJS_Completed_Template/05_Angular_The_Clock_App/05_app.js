// Creation of Angular Module
var app = angular.module('ClockApp',[]);

// Creation of Angular Controller
app.controller('ClockAppCtrl',function($scope,$interval) {

    var indianClock = function() {
        var today = new Date();
        var options = {timeZone : 'Asia/Kolkata'};
        $scope.indianTime = today.toLocaleTimeString('en-US',options);
        $scope.indianDate = today.toLocaleDateString('en-US',options);
    };
    $interval(indianClock,1000);

    var USClock = function() {
        var today = new Date();
        var options = {timeZone : 'America/New_York'};
        $scope.usTime = today.toLocaleTimeString('en-US',options);
        $scope.usDate = today.toLocaleDateString('en-US',options);
    };
    $interval(USClock,1000);

    var ChinaClock = function() {
        var today = new Date();
        var options = {timeZone : 'Asia/Shanghai'};
        $scope.chinaTime = today.toLocaleTimeString('en-US',options);
        $scope.chinaDate = today.toLocaleDateString('en-US',options);
    };
    $interval(ChinaClock,1000);


});