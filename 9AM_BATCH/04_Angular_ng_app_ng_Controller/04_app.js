// Creation of Module
var abc = angular.module('LikesApp',[]);

// Creation of Controller
abc.controller('LikesAppCtrl',function($scope) {
    $scope.likes = 0;
    $scope.dislikes = 0;
    $scope.total = 0;
    $scope.liked = function() {
        $scope.likes++;
        $scope.total++;
    };
    $scope.disliked = function() {
        $scope.dislikes++;
        $scope.total++;
    };
});