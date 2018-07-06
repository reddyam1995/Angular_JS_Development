// Creation of Module
var app = angular.module('GroceryApp',[]);

// Creation of Controller
app.controller('GroceryAppCtrl',function() {
    this.item = '';
    this.groceryList = [];
    this.editMode = false;
    this.addItem = function(item) {
      if(item.length === 0){
            alert('Dude!! Add at least one Item');
          this.item = '';
      }
      else if(!(this.groceryList.indexOf(item) === -1)){
          alert('Dude!! The ' + item + ' is already Exists!!');
          this.item = '';
      }
      else{
          this.groceryList.push(item);
          this.item = '';
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

});
