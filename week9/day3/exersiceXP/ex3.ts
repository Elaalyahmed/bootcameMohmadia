let someValue: any = "This is a string";

let strLength1: number = (<string>someValue).length;

let strLength2: number = (someValue as string).length;

console.log(strLength1, strLength2); 