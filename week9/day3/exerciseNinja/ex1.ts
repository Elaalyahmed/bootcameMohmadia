class Container<T extends object> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(item: T): boolean {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }

    list(): T[] {
        return [...this.items];
    }

    // Bonus: Find item by property
    find<K extends keyof T>(key: K, value: T[K]): T | undefined {
        return this.items.find(item => item[key] === value);
    }
}

// Example usage:
type Person = { name: string; age: number };
type Employee = { id: number; department: string };

const personEmployeeContainer = new Container<Person & Employee>();
const john: Person & Employee = { name: "John", age: 30, id: 1, department: "IT" };

personEmployeeContainer.add(john);
console.log(personEmployeeContainer.list());
personEmployeeContainer.remove(john);