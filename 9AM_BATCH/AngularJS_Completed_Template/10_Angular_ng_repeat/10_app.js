// Creation of Module
var app = angular.module('GoodMorningApp',[]);

// Creation of Controller
app.controller('GoodMorningAppCtrl',function() {
    this.username = '';
    this.times = null;
    this.timesArray = [];
    this.getTimes = function() {
        if(this.times === null){
            this.timesArray = [];
        }
        else{
            this.timesArray = [];
            for(var i = 0; i< this.times; i++){
                this.timesArray[i] = i;
            }
        }
    };
});