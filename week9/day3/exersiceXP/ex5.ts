interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
  console.log(arg.length);
}
logLength("hello"); 
logLength([1, 2, 3]); 
