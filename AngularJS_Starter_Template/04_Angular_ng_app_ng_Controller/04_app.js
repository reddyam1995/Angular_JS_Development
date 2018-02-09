var app = angular.module("likesApp" , []);
app.controller("likeAppCtrl",function ($scope) {
    $scope.likes = 0;
    $scope.dislikes = 0;
    $scope.total = 0;
    $scope.likesFn = function() {
        $scope.likes++;
        $scope.total++;

    };
    $scope.dislikesFn = function() {
        $scope.dislikes++;
        $scope.total++;
    };

});
