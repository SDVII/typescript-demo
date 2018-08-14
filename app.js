"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Can only have a single constructor paramter
function logged(constructorFun) {
    console.log(constructorFun);
}
var Friend = /** @class */ (function () {
    function Friend() {
        console.log("hi");
    }
    Friend = __decorate([
        logged
    ], Friend);
    return Friend;
}());
//Factory
function logging(value) {
    return value ? logged : null;
}
function printable(constructorFun) {
    //adds the function print to whatever it's attached to
    constructorFun.prototype.print = function () {
        console.log(this.name);
    };
}
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = "bunny";
    }
    Animal = __decorate([
        logging(true),
        printable
    ], Animal);
    return Animal;
}());
var animal = new Animal();
animal.print();
