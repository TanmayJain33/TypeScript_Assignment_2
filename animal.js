"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.voice = function () {
        console.log("My Name is ".concat(this.name, ". My color is ").concat(this.color, ". I ").concat(this.sound));
    };
    return Animal;
}());
exports.Animal = Animal;
