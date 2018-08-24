// Create a Module
var app = angular.module('InvoiceApp',[]);

// Create a Controller
app.controller('InvoiceAppCtrl',function() {
    this.editApp = true;
    this.invoice = {
        customer_data : {
            name : 'Mr. Rajan Jain',
            companyName : 'Jain Industries Inc',
            address1 : 'Plot No: 112',
            address2 : 'Hitech City , Hyderabad',
            pincode : 500010
        },
        company_data : {
            name : 'UiBrains Tech Labs',
            companyName : 'UiBrains.com',
            address1 : 'Plot No: 1471, Road No. 12',
            address2 : 'Jubilee Hills , Hyderabad',
            pincode : 500102
        },
        gst : 13,
        items : [
            
        ]
    };
    this.deleteItem = function(item) {
        this.invoice.items.splice(this.invoice.items.indexOf(item),1);
    };
    this.addItem = function() {
      this.invoice.items.push({
          description : '',
          quantity : '',
          cost : ''
      });
    };
    this.subTotal = function() {
        var subTotal = 0;
        this.invoice.items.forEach(function (item) {
            subTotal += (item.quantity * item.cost);
        });
        return subTotal;
    };
    this.addGST = function() {
       return this.subTotal() * (this.invoice.gst / 100);
    };
    this.grandTotal = function() {
        return this.subTotal() + this.addGST();
    };
    this.OnEditMode = function() {
      this.editApp = true;
    };
    this.OffEditMode = function() {
      this.editApp = false;
    };
    this.printDoc = function() {
      window.print();
    };
});