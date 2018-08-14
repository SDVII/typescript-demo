"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username, email) {
        this.name = name;
        this.username = username;
        this.email = email;
        // private name :string;
        // username : string;
        // protected email : string;
        // constructor(name: string, username : string, email : string){
        //     this.name = name;
        //     this.username = username;
        //     this.email = email;
        // }
        //shorter ver.
        this.predefinedVar = 7;
    }
    Person.prototype.printUsername = function () {
        console.log(this.username);
        this.setEmail('kinan.hatahet@gmail.com');
    };
    Person.prototype.setEmail = function (newEmail) {
        this.email = newEmail;
        console.log(this.email);
    };
    return Person;
}());
var p = new Person('houmam', 'sdvii', 'houmam.hatahet@gmail.com');
p.printUsername();
var Houmam = /** @class */ (function (_super) {
    __extends(Houmam, _super);
    function Houmam(username, email) {
        return _super.call(this, 'houmam', username, email) || this;
    }
    return Houmam;
}(Person));
var hoummam = new Houmam("sdvii", 'h.h@hotmail.com');
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "ba";
console.log(plant.species);
plant.species = "banana";
console.log(plant.species);
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCir = function (d) {
        return (this.pi * d);
    };
    Helpers.pi = 3.14;
    return Helpers;
}());
console.log(Helpers.calcCir(4));
// can only be inherited
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default';
        this.budget = 7;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var NewProject = /** @class */ (function (_super) {
    __extends(NewProject, _super);
    function NewProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return NewProject;
}(Project));
var project = new NewProject();
project.changeName('super project');
//Can only be one object of this class
var Lonely = /** @class */ (function () {
    function Lonely(name) {
        this.name = name;
    }
    Lonely.getInstance = function () {
        if (!Lonely.instance) {
            Lonely.instance = new Lonely('one is the loneliest number');
        }
        return Lonely.instance;
    };
    return Lonely;
}());
var var3 = Lonely.getInstance();
console.log(var3.name);
// var3.name = "x"; won't work
