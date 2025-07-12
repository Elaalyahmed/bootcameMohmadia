class Repository<T extends { id: number }> {
    private items: T[] = [];

    add(item: T): void {
        if (this.items.some(i => i.id === item.id)) {
            throw new Error(`Item with id ${item.id} already exists`);
        }
        this.items.push(item);
    }

    get(id: number): T {
        const item = this.items.find(item => item.id === id);
        if (!item) {
            throw new Error(`Item with id ${id} not found`);
        }
        return item as T; 
    }

    list(): T[] {
        return [...this.items];
    }

    remove(id: number): boolean {
        const index = this.items.findIndex(item => item.id === id);
        if (index > -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }
}

// Example usage:
interface User {
    id: number;
    name: string;
    email: string;
}

const userRepository = new Repository<User>();

userRepository.add({ id: 1, name: "Alice", email: "alice@example.com" });
userRepository.add({ id: 2, name: "Bob", email: "bob@example.com" });

console.log(userRepository.get(1).name); // "Alice"
console.log(userRepository.list());
userRepository.remove(2);