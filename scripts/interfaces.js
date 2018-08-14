"use strict";
function greet(person) {
    console.log("hello " + person.name);
}
function changeName(person) {
    person.name = 'houmam';
}
var person = {
    name: "max",
    age: 27,
    greet: function (lastName) {
        console.log(lastName + ", " + name + " " + lastName);
    }
};
greet(person);
changeName(person);
greet(person);
var Personal = /** @class */ (function () {
    function Personal() {
    }
    Personal.prototype.greet = function (lastName) {
        console.log(lastName + ", " + name + " " + lastName);
    };
    return Personal;
}());
var myPersonal = new Personal();
myPersonal.name = "kinan";
greet(myPersonal);
myPersonal.greet('hatahet');
var myDVF;
myDVF = function (number1, number2) {
    return (number1 + number2) * 2;
};
console.log(myDVF(7, 13));
var oldPerson = {
    name: 'sinan',
    age: 36,
    greet: function (lastName) {
        console.log(lastName + ", " + name + " " + lastName);
    }
};
