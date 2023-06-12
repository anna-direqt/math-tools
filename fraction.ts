function gcf(num1: number, num2: number) : number {
    if (num2 === 0) {
        return num1;
    }
    return gcf(num2, num1 % num2);
}

function lcm(num1: number, num2: number) : number {
    if (num1 > num2) {
        const temp = num1;
        num1 = num2;
        num2 = temp;
    } 
    return lcmHelper(num1, num2);
}

function lcmHelper(num1: number, num2: number) : number {
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

export class Fraction {
    num: number;
    denom: number;

    constructor(num: number, denom: number) {
        this.num = parseInt(`${num}`);
        this.denom = parseInt(`${denom}`);
    }

    simplify() {
        var gcd = gcf(this.num, this.denom);
        this.num /= gcd;
        this.denom /= gcd;
        if (this.denom < 0) {
            this.num *= -1;
            this.denom *= -1;
        }
    }

    returnSimplified() {
        let copy = new Fraction(this.num, this.denom);
        copy.simplify();
        return copy;
    }

    multiply(other : Fraction) {
        this.num *= other.num;
        this.denom *= other.denom;
        this.simplify();
    }

    divide(other : Fraction) {
        let multiplier = new Fraction(other.denom, other.num);
        this.multiply(multiplier);
    }

    add(other : Fraction) {
        var lcd = lcm(this.denom, other.denom);
        var mult1 = lcd / this.denom;
        var mult2 = lcd / other.denom;
        this.num *= mult1;
        this.denom = lcd;
        let addend = new Fraction(other.num *= mult2, lcd);
        this.num += addend.num;
        this.simplify();
    }

    subtract(other : Fraction) {
        let subtrahend = new Fraction(-1 * other.num, other.denom);
        this.add(subtrahend);
    }

    toString() {
        return `${this.num}/${this.denom}`;
    }

    equals(other : Fraction) {
        let simplified1 = this.returnSimplified();
        let simplified2 = other.returnSimplified();
        return simplified1.num === simplified2.num && simplified1.denom === simplified2.denom;
    }
}