class Device {
    constructor(public readonly serialNumber: string) {}
    
    getInfo(): string {
        return `Serial: ${this.serialNumber}`;
    }
}

class Laptop extends Device {
    constructor(serialNumber: string, public model: string, public price: number) {
        super(serialNumber);
    }

    getInfo(): string {
        return `${super.getInfo()}, Model: ${this.model}, Price: $${this.price}`;
    }
}

// Usage
const laptop = new Laptop("SN12345", "MacBook Pro", 1999);
console.log(laptop.getInfo());
laptop.model = "MacBook Air";
laptop.price = 1499;
// laptop.serialNumber = "SN54321"; // Error: Cannot assign to 'serialNumber'