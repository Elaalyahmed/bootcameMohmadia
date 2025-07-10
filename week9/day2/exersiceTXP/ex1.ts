class Employee {
    protected name: string;
    protected salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    getDetails(): string {
        return `Name: ${this.name}, Salary: ${this.salary}`;
    }
}

class Manager extends Employee {
    public department: string;

    constructor(name: string, salary: number, department: string) {
        super(name, salary);
        this.department = department;
    }

    getDetails(): string {
        return `${super.getDetails()}, Department: ${this.department}`;
    }
}

// Usage
const manager = new Manager("Alice Johnson", 80000, "Engineering");
console.log(manager.getDetails());
