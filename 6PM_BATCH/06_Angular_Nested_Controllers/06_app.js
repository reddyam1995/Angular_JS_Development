// creation of Angular Module
var app = angular.module('NestedCtrlApp',[]);

// creation of Parent Controller
app.controller('ParentCtrl',function($scope) {
    $scope.test = "";
});

// creation of Child Controller
app.controller('ChildCtrl',function($scope) {

});
