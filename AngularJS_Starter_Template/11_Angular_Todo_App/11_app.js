angular.module("GroceryApp",[]).controller("GroceryAppCtrl",function () {
    this.item = "";
    this.editMode = false;
    this.groceryList = [];
    this.addItem = function () {
        this.groceryList.push(this.item); // add item to an array
        this.item = "";
    };
    this.enableEditMode = function () {
        this.editMode = true;
    };
    this.disableEditMode = function () {
        this.editMode = false;
    };
    this.deleteItem = function (index) {
        this.groceryList.splice(index);
    }
});
