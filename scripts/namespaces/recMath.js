"use strict";
var MyMath;
(function (MyMath) {
    function calcRecArea(w, h) {
        return w * h;
    }
    MyMath.calcRecArea = calcRecArea;
})(MyMath || (MyMath = {}));
