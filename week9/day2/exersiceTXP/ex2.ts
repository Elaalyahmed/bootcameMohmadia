class Car {
    public readonly make: string;
    private readonly model: string;
    public year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarDetails(): string {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
}

// Usage
const myCar = new Car("Toyota", "Camry", 2022);
console.log(myCar.getCarDetails());

// Attempting to modify readonly properties (will cause TypeScript errors)
// myCar.make = "Honda"; // Error: Cannot assign to 'make' because it is a read-only property
// myCar.model = "Accord"; // Error: Property 'model' is private and only accessible within class 'Car'
myCar.year = 2023; // This is allowed