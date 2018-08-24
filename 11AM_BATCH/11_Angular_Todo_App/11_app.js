// Create a Module
var app = angular.module('GroceryApp',[]);

// Create a Controller
app.controller('GroceryAppCtrl',function() {
    this.groceryItem = '';
    this.groceryList = [];
    this.editMode = false;
    this.addGroceryItem = function(item) {
        if(this.groceryItem !== ''){
            // Item not Exists
            if(this.groceryList.indexOf(item) === -1){
                this.groceryList.push(item);
                this.groceryItem = '';
            }
            // If Item Exists
            else{
                alert('Dude!! The ' + item + ' Already Exists');
                this.groceryItem = '';
            }
        }
        else{
            alert('Dude!! Please add at least One Item');
        }
    };
    this.OnEditMode = function() {
      this.editMode = true;
    };
    this.OffEditMode = function() {
      this.editMode = false;
    };
    this.deleteGroceryItem = function(index) {
        this.groceryList.splice(index,1);
    };
    this.replaceGroceryItem = function(index,item) {
        this.groceryList.splice(index,1,item);
    };
});