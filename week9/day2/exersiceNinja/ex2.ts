class Shape {
    static totalShapes: number = 0;

    constructor() {
        Shape.totalShapes++;
    }

    static getType(): string {
        return "Generic Shape";
    }

    area(): number {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    static getType(): string {
        return "Circle";
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Square extends Shape {
    side: number;

    constructor(side: number) {
        super();
        this.side = side;
    }

    static getType(): string {
        return "Square";
    }

    area(): number {
        return this.side ** 2;
    }
}

// Usage
console.log(Shape.getType()); // "Generic Shape"
console.log(Circle.getType()); // "Circle"
console.log(Square.getType()); // "Square"

const circle = new Circle(5);
const square = new Square(4);
console.log(Shape.totalShapes); // 2