// Create a Module
var app = angular.module('GoodMorningApp',[]);

// Create a Controller
app.controller('GoodMorningAppCtrl',function() {
    this.name = '';
    this.times = null;
    this.timesArray = [];
    this.getTimes = function(number) {
        if(number !== null){
            this.timesArray = [];
            for(var i = 0; i<number; i++){
                 this.timesArray[i] = i;
            }
        }
        else{
            this.timesArray = [];
        }
    };
});