// Create a Module
var app = angular.module('InvoiceApp',[]);

// Create a Controller
app.controller('InvoiceAppCtrl',function() {
    this.editMode = true;
    this.invoice = {
        customer_data : {
            name : 'Mr. Rajan Jain',
            company_name : 'Jain Industries Inc.',
            address1 : 'Plot No. 112',
            address2 : 'Hitech city , Hyderabad',
            pincode : 500010
        },
        company_data : {
            name : 'UiBrains Techno Labs',
            company_name : 'UiBrains.com',
            address1 : 'Plot No:1471 , Road No: 12',
            address2 : 'Jubliee Hills , Hyderabad',
            pincode : 5000201
        },
        gst : 13,
        items : [
            {
                description : '',
                quantity : null,
                cost : null
            }
        ]
    };
    this.addInvoiceItem = function(){
        var item = {
            description : '',
            quantity : null,
            cost : null
        };
        this.invoice.items.push(item);
    };
    this.deleteInvoiceItem = function(item) {
        this.invoice.items.splice(this.invoice.items.indexOf(item),1);
    };
    this.subTotal = function() {
        var subtotal = 0;
        this.invoice.items.forEach(function (item) {
            subtotal += (item.quantity * item.cost);
        });
        return subtotal;
    };
    this.getGST = function() {
      return this.subTotal() * (this.invoice.gst / 100);
    };

    this.grandTotal = function() {
      return this.subTotal() + this.getGST();
    };
    this.OnEditMode = function() {
        this.editMode = true;
    };
    this.OffEditMode = function() {
        this.editMode = false;
    };
    this.printDoc = function() {
        window.print();
    };
});