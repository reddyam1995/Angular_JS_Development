angular.module('GroceryListApp',[]).controller('GroceryListAppCtrl',function() {
    this.groceryItem = "";
    this.groceryArray = [];
    this.editMode = false;
    this.addItem = function() {
        if(this.groceryItem === ""){
            alert("Please add an Item Dude!!");
        }
        else{
            if(!(this.groceryArray.indexOf(this.groceryItem) === -1)){
                alert("The Item is already Exists Dude!!");
            }
            else{
                this.groceryArray.push(this.groceryItem);
                this.groceryItem = "";
            }
        }
    };
    this.enableEditMode = function() {
      this.editMode = true;
    };
    this.disableEditMode = function () {
      this.editMode = false;
    };
    this.deleteItem = function(index) {
        this.groceryArray.splice(index,1);
    }
});
