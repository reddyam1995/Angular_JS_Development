// Creation of Module
var app = angular.module('StringNumberApp',[]);

// Creation of Controller
app.controller('StringNumberAppCtrl',function() {
    this.num1 = null;
    this.message = '';
    this.getMessage = function() {
        if(this.num1 !== null){
            var str = this.num1.toString();
            var strMessage = '';
            for(var i = 0; i<str.length; i++){
                var char = parseInt(str.charAt(i).trim());
                switch(char){
                    case 0:
                        strMessage += ' Zero ';
                        break;
                    case 1:
                        strMessage += ' One ';
                        break;
                    case 2:
                        strMessage += ' Two ';
                        break;
                    case 3:
                        strMessage += ' Three ';
                        break;
                    case 4:
                        strMessage += ' Four ';
                        break;
                    case 5:
                        strMessage += ' Five ';
                        break;
                    case 6:
                        strMessage += ' Six ';
                        break;
                    case 7:
                        strMessage += ' Seven ';
                        break;
                    case 8:
                        strMessage += ' Eight ';
                        break;
                    case 9:
                        strMessage += ' Nine ';
                        break;
                    default:
                        strMessage += '';
                        break;
                }
            }
            this.message = strMessage;
        }
        else{
            this.message = '';
        }
    };
});