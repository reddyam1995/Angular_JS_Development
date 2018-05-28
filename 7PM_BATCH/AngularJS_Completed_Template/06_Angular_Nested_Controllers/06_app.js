var app = angular.module('NestedCtrlApp',[]);

//Parent Controller
app.controller('ParentCtrl',function ($scope) {
    $scope.text = "";
});


//Child Controller
app.controller('ChildCtrl',function ($scope) {
    //$scope.text = "";
});
