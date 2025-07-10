// Better approach - define interface for class structure
interface Operation {
    execute(a: number, b: number): number;
}

class Addition implements Operation {  
    execute(a: number, b: number): number {  
        return a + b;  
    }  
}

class Multiplication implements Operation {  
    execute(a: number, b: number): number {  
        return a * b;  
    }  
}

// Usage (unchanged from your original code)
const adder = new Addition();
console.log(adder.execute(5, 3)); // 8