"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import {calcCir} from './modules/circle';
var Circle = __importStar(require("./modules/circle.js"));
var rectangle_1 = __importDefault(require("./modules/rectangle"));
console.log(Circle.calcCir(7));
console.log(rectangle_1.default(7, 13));
