// Creation of Module
var app = angular.module('GMApp',[]);

// Creation of Controller
app.controller('GMAppCtrl',function() {
    this.username = '';
    this.times = null;
    this.timesArray = [];
    this.getTimes = function() {
      if(this.times === null){
          this.timesArray = [];
      }
      else{
          this.timesArray = [];
          for(var i=0; i< this.times;i++){
              this.timesArray[i] = i;
          }
      }
    };
});