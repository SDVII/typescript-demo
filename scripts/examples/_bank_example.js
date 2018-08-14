"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: 'houmam',
    bankAccount: bankAccount,
    hobbies: ['reading', 'drawing']
};
myself.bankAccount.deposit(3000);
console.log(myself);
