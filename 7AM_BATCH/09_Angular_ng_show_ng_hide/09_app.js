// Create a Module
var app = angular.module('HobbiesApp',[]);

// Create a Controller
app.controller('HobbiesAppCtrl',function() {
    this.eating = false;
    this.coding = false;
    this.sleeping = false;
});