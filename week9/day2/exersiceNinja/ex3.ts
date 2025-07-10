interface Calculator {
    a: number;
    b: number;
    operate(operation: (x: number, y: number) => number): number;
}

class AdvancedCalculator implements Calculator {
    constructor(public a: number, public b: number) {}

    operate(operation: (x: number, y: number) => number): number {
        return operation(this.a, this.b);
    }

    // Additional methods
    add(): number {
        return this.a + this.b;
    }

    subtract(): number {
        return this.a - this.b;
    }

    multiply(): number {
        return this.a * this.b;
    }
}

// Usage
const calc = new AdvancedCalculator(10, 5);
console.log(calc.operate((x, y) => x + y)); // 15
console.log(calc.add()); // 15
console.log(calc.multiply()); // 50