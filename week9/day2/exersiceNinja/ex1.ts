class Employee {
    public name: string;
    private age: number;
    protected salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    protected calculateBonus(): number {
        return this.salary * 0.1; // 10% bonus
    }

    public getSalaryDetails(): string {
        return `Base Salary: ${this.salary}`;
    }
}

class Manager extends Employee {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    public getSalaryDetails(): string {
        const bonus = this.calculateBonus();
        return `${super.getSalaryDetails()}, Bonus: ${bonus}, Total: ${this.salary + bonus}`;
    }
}

class ExecutiveManager extends Manager {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    public approveBudget(amount: number): string {
        return `${this.name} approved budget of ${amount}`;
    }
}

// Usage
const exec = new ExecutiveManager("Alice", 45, 100000);
console.log(exec.getSalaryDetails());
console.log(exec.approveBudget(50000));
// console.log(exec.age); // Error: Property 'age' is private
// console.log(exec.calculateBonus()); // Error: Property 'calculateBonus' is protected