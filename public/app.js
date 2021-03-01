"use strict";
//classes
var Invoice = /** @class */ (function () {
    //readonly client: string
    //private details: string
    //public amount: number
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes Rs " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('faraaz', 'pizza bill', 250);
var invTwo = new Invoice('ashfaq', 'subway bill', 2850);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
var form = document.querySelector('.new-item-form');
// inputs
var type = document.querySelector('#type');
var toform = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toform.value, details.value, amount.valueAsNumber);
});
