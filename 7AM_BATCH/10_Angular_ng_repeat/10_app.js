// Create a Module
var app = angular.module('GMApp',[]);

// Create a Controller
app.controller('GMAppCtrl',function() {
    this.name = '';
    this.count = null;
    this.timesArray = [];
    this.addElements = function() {
      if(this.count !== null){
          this.timesArray = [];
          for(var i=0; i<this.count; i++){
              this.timesArray[i] = i;
          }
      }
      else{
          this.timesArray = [];
      }
    };
});
