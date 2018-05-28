angular.module('GoodMorningApp',[]).controller('GoodMorningAppCtrl',function() {
    this.username = "";
    this.times = "";
    this.timesArray = [];
    this.getTimes = function () {
        console.log(this.times);
        if(this.times === null){
            this.timesArray = [];
        }
        else{
            this.timesArray = [];
            for(var i = 0; i<this.times; i++){
                this.timesArray[i] = i;
            }
        }

    }
});