import {assert} from "chai";
import {describe} from "mocha";
import {Fraction} from "./fraction";

describe("Simplify Tests", () => {
    it("should simplify 27/35 as 27/35", () => {
        let frac = new Fraction(27, 35);
        frac.simplify();
        let simplified = new Fraction(27, 35);
        assert.deepEqual(frac, simplified);
    });
    it("should simplify 81/243 as 1/3", () => {
        let frac = new Fraction(81, 243);
        frac.simplify();
        let simplified = new Fraction(1, 3);
        assert.deepEqual(frac, simplified);
    });
    it ("should simplify 120/100 as 6/5", () => {
        let frac = new Fraction(120, 100);
        frac.simplify();
        let simplified = new Fraction(6, 5);
        assert.deepEqual(frac, simplified);
    });
    it ("should simplify 10/-20 to be -1/2", () => {
        let frac = new Fraction(10, -20);
        frac.simplify();
        let simplified = new Fraction(-1, 2);
        assert.deepEqual(frac, simplified);
    });
});

describe("Multiply/Divide Tests", () => {
    it ("should multiply 3/2 and 5/8 to be 15/16", () => {
        let frac = new Fraction(3, 2);
        frac.multiply(new Fraction(5, 8));
        let multiplied = new Fraction(15, 16);
        assert.deepEqual(frac, multiplied);
    });
    it ("should multiply 5/2 and 1/5 to be 1/2", () => {
        let frac = new Fraction(5, 2);
        frac.multiply(new Fraction(1, 5));
        let multiplied = new Fraction(1, 2);
        assert.deepEqual(frac, multiplied);
    });
    it ("should divide 2/7 by 5/6 to be 12/35", () => {
        let frac = new Fraction(2, 7);
        frac.divide(new Fraction(5, 6));
        let divided = new Fraction(12, 35);
        assert.deepEqual(frac, divided);
    });
});

describe("Addition/Subtraction Tests", () => {
    it ("should add 7/8 and 13/28 to be 75/56", () => {
        let frac = new Fraction(7, 8);
        frac.add(new Fraction(13, 28));
        let added = new Fraction(75, 56);
        assert.deepEqual(frac, added);
    });
    it ("should add 13/7 and 12/25 to be 409/175", () => {
        let frac = new Fraction(13, 7);
        frac.add(new Fraction(12, 25));
        let added = new Fraction(409, 175);
        assert.deepEqual(frac, added);
    });
    it ("should subtract 20/21 from 30/7 to be 10/3", () => {
        let frac = new Fraction(30, 7);
        frac.subtract(new Fraction(20, 21));
        let subtracted = new Fraction(10, 3);
        assert.deepEqual(frac, subtracted);
    });
    it ("should subtract 3/2 from 1/4 to be -5/4", () => {
        let frac = new Fraction(1, 4);
        frac.subtract(new Fraction(3, 2));
        let subtracted = new Fraction(-5, 4);
        assert.deepEqual(frac, subtracted);
    });
});

describe("Equals Tests", () => {
    it ("21/30 and 7/10 should be equal", () => {
        let frac = new Fraction(21, 30);
        var equals = frac.equals(new Fraction(7, 10));
        assert.equal(equals, true);
    })
    it ("15/25 and 45/75 should be equal", () => {
        let frac = new Fraction(15, 25);
        var equals = frac.equals(new Fraction(45, 75));
        assert.equal(equals, true);
    });
});