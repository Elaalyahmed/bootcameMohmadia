// Item interface
interface Item<T> {
    value: T;
}

// Queue class
class Queue<T> {
    private items: Item<T>[] = [];

    add(item: Item<T>): void {
        this.items.push(item);
    }

    remove(): Item<T> | undefined {
        return this.items.shift();
    }

    size(): number {
        return this.items.length;
    }
}

// Example usage
const numberQueue = new Queue<number>();
numberQueue.add({ value: 1 });
numberQueue.add({ value: 2 });
console.log(numberQueue.remove()); // { value: 1 }
console.log(numberQueue.size()); // 1

const stringQueue = new Queue<string>();
stringQueue.add({ value: "first" });
stringQueue.add({ value: "second" });
console.log(stringQueue.remove()); // { value: "first" }