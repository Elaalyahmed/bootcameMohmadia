namespace MyApp {
    export interface Storage<T> {
        add(item: T): void;
        get(index: number): T | undefined;
    }

    export class Box<T> implements Storage<T> {
        private items: T[] = [];

        add(item: T): void {
            this.items.push(item);
        }

        get(index: number): T | undefined {
            return this.items[index];
        }
    }
}

// Example usage
const stringBox = new MyApp.Box<string>();
stringBox.add("hello");
stringBox.add("world");
console.log(stringBox.get(0)); // "hello"