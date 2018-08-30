// Create a Module
var app = angular.module('GroceryApp',[]);

// Create a Controller
app.controller('GroceryAppCtrl',function() {
    this.groceryItem = null;
    this.groceryList = [];
    this.editMode = false;
    this.addItem = function (item) {
        if(item !== null){
            if(this.groceryList.indexOf(item) === -1){
                this.groceryList.push(item);
                this.groceryItem = '';
            }
            else{
                alert('Dude!! the ' + item + ' Already Exists');
                this.groceryItem = '';
            }
        }
        else{
            alert('Dude!! add at least one item');
        }
    };
    this.OnEditMode = function() {
      this.editMode = true;
    };
    this.OffEditMode = function() {
        this.editMode = false;
    };
    this.deleteItem = function(index) {
        this.groceryList.splice(index,1);
    };
    this.replaceItem = function(index,item) {
        this.groceryList.splice(index,1,item);
    };
});