
angular.module("GroceryApp",[]).controller("GroceryAppCtrl",function () {
    this.item = "";
    this.editMode = false;
    this.groceryList = [];
    this.addItem = function () {
        if(this.item !== ""){
            this.groceryList.push(this.item);
            this.item = "";
        }
    };
    this.enableEditMode = function () {
      this.editMode = true;
    };
    this.disableEditMode = function () {
      this.editMode = false;
    };
    this.deleteItem = function (index) {
        this.groceryList.splice(index,1);
    };
});
