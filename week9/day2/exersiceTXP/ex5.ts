interface Shape {
    color: string;
    getArea(): number;
}

interface Rectangle extends Shape {
    readonly width: number;
    readonly height: number;
    getPerimeter(): number;
}

class Rect implements Rectangle {
    constructor(
        public color: string,
        public readonly width: number,
        public readonly height: number
    ) {}

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

// Usage
const myRectangle = new Rect("blue", 10, 5);
console.log(`Color: ${myRectangle.color}`);
console.log(`Area: ${myRectangle.getArea()}`); // 50
console.log(`Perimeter: ${myRectangle.getPerimeter()}`); // 30

// Attempting to modify readonly properties (will cause TypeScript errors)
// myRectangle.width = 15; // Error: Cannot assign to 'width' because it is a read-only property
myRectangle.color = "red"; // This is allowed