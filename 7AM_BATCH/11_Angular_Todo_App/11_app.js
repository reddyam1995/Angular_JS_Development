// Create a Module
var app = angular.module('GroceryApp',[]);

// Create a Controller
app.controller('GroceryAppCtrl',function() {
    this.item = '';
    this.groceryList = [];
    this.editMode = false;
    this.addItem = function(item) {
        if(item === ''){
            alert('Dude! Add at least one Item');
        }
        else{
            if(this.groceryList.indexOf(item) === -1){
                this.groceryList.push(item);
                this.item = '';
            }
            else{
                alert('Dude!' + item + ' is already Exists');
                this.item = '';
            }
        }
    };
    this.enableEditMode = function() {
      this.editMode = true;
    };
    this.disableEditMode = function() {
      this.editMode = false;
    };
    this.deleteItem = function(index) {
        this.groceryList.splice(index,1);
    };
    this.replaceItem = function(index,item) {
      this.groceryList.splice(index,1,item);
    };
});