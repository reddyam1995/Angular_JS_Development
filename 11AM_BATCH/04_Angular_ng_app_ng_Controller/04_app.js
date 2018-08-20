// Create a Module
var app = angular.module('LikesApp',[]);

// Create a Controller
app.controller('LikesAppCtrl',function($scope) {
    $scope.likes = 0;
    $scope.dislikes = 0;
    $scope.totalLikes = 0;
    $scope.liked = function() {
        $scope.likes++;
        $scope.totalLikes++;
    };
    $scope.disLiked =function() {
        $scope.dislikes ++;
        $scope.totalLikes++;
    }
});