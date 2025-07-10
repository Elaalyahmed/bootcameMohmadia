interface Product {
    readonly name: string;
    price: number;
    discount?: number;
}

interface Electronics extends Product {
    warrantyPeriod: number;
}

class Smartphone implements Electronics {
    constructor(
        public readonly name: string,
        public price: number,
        public warrantyPeriod: number,
        public discount?: number
    ) {}

    getFinalPrice(): number {
        return this.discount ? this.price * (1 - this.discount) : this.price;
    }

    getDetails(): string {
        return `Name: ${this.name}, Price: $${this.getFinalPrice()}, Warranty: ${this.warrantyPeriod} months`;
    }
}

// Usage
const phone = new Smartphone("iPhone 15", 999, 12, 0.1);
console.log(phone.getDetails());
// phone.name = "iPhone 16"; // Error: Cannot assign to 'name'