"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fraction = void 0;
function gcf(num1, num2) {
    if (num2 === 0) {
        return num1;
    }
    return gcf(num2, num1 % num2);
}
function lcm(num1, num2) {
    if (num1 > num2) {
        var temp = num1;
        num1 = num2;
        num2 = temp;
    }
    return lcmHelper(num1, num2);
}
function lcmHelper(num1, num2) {
    if (num1 % num2 === 0) {
        return num1;
    }
    var multiplier = 2;
    while (multiplier < num2) {
        var lcm = num1 * multiplier;
        if (lcm % num2 === 0) {
            return lcm;
        }
        multiplier++;
    }
    return num1 * num2;
}
var Fraction = /** @class */ (function () {
    function Fraction(num, denom) {
        this.num = parseInt("".concat(num));
        this.denom = parseInt("".concat(denom));
    }
    Fraction.prototype.simplify = function () {
        var gcd = gcf(this.num, this.denom);
        this.num /= gcd;
        this.denom /= gcd;
        if (this.denom < 0) {
            this.num *= -1;
            this.denom *= -1;
        }
    };
    Fraction.prototype.returnSimplified = function () {
        var copy = new Fraction(this.num, this.denom);
        copy.simplify();
        return copy;
    };
    Fraction.prototype.multiply = function (other) {
        this.num *= other.num;
        this.denom *= other.denom;
        this.simplify();
    };
    Fraction.prototype.divide = function (other) {
        var multiplier = new Fraction(other.denom, other.num);
        this.multiply(multiplier);
    };
    Fraction.prototype.add = function (other) {
        var lcd = lcm(this.denom, other.denom);
        var mult1 = lcd / this.denom;
        var mult2 = lcd / other.denom;
        this.num *= mult1;
        this.denom = lcd;
        var addend = new Fraction(other.num *= mult2, lcd);
        this.num += addend.num;
        this.simplify();
    };
    Fraction.prototype.subtract = function (other) {
        var subtrahend = new Fraction(-1 * other.num, other.denom);
        this.add(subtrahend);
    };
    Fraction.prototype.toString = function () {
        return "".concat(this.num, "/").concat(this.denom);
    };
    Fraction.prototype.equals = function (other) {
        var simplified1 = this.returnSimplified();
        var simplified2 = other.returnSimplified();
        return simplified1.num === simplified2.num && simplified1.denom === simplified2.denom;
    };
    return Fraction;
}());
exports.Fraction = Fraction;
