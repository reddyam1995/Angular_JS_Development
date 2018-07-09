// Create angular JS Module
var app = angular.module('InvoiceApp',[]);

// Create angular Controller
app.controller('InvoiceAppCtrl',function() {
    this.editMode = true;
    this.invoice = {
      tax : 13,
      customer_info : {
          name : 'Mr. Rajan Jain',
          org : 'Jain Industries Inc',
          street : 'Plot No. 12',
          city : 'Hitech City , Hyderabad',
          pincode : '5000120'
      },
      company_info : {
          name : 'UiBrains Techno Labs',
          org : 'UiBrains.com',
          street : 'Plot No: 1471 , Road No: 12',
          city : 'Jubilee Hills , Hyderabad',
          pincode : '5000010'
      },
      items :[ { description : '' , qty: '' , cost : ''  }]
    };
    this.subTotal = function() {
        var total = 0.00;
        angular.forEach(this.invoice.items,function(item) {
           total += (item.qty * item.cost);
        });
        return total;
    };
    this.calculateTax = function() {
      return (this.subTotal() * (this.invoice.tax / 100));
    };
    this.grandTotal = function() {
      return this.subTotal() + this.calculateTax();
    };
    this.addItem = function() {
        this.invoice.items.push({ description : '' , qty: '' , cost : '' });
    };
    this.deleteItem = function(item) {
        this.invoice.items.splice(this.invoice.items.indexOf(item),1);
    };
    this.onEditMode = function() {
      this.editMode = true;
    };
    this.offEditMode = function() {
      this.editMode = false;
    };
    this.printInvoice = function() {
      window.print();
    };
});