const _ = require('lodash');
const math = require('./math');

const sum = math.add(10, 5);
const product = math.multiply(4, 3);

const numbers = [3, 7, 2, 9, 5];
const max = _.max(numbers);

console.log('Sum:', sum);            
console.log('Product:', product);     
console.log('Max number:', max);    
