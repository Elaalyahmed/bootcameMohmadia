class MathUtils {
    static PI: number = 3.14159;

    static circumference(radius: number): number {
        return 2 * this.PI * radius;
    }
}


console.log(MathUtils.PI); 
console.log(MathUtils.circumference(5));