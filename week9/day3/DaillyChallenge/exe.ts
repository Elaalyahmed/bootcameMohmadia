// 1. Define the types
type User = {
  type: 'user';
  name: string;
  age: number;
};

type Product = {
  type: 'product';
  id: number;
  price: number;
};

type Order = {
  type: 'order';
  orderId: string;
  amount: number;
};

type MixedData = User | Product | Order;

// 2. Create the handleData function
function handleData(data: MixedData[]): string[] {
  return data.map(item => {
    switch (item.type) {
      case 'user':
        return `Hello ${item.name}! You are ${item.age} years old.`;
      case 'product':
        return `Product #${item.id} costs $${item.price.toFixed(2)}.`;
      case 'order':
        return `Order ${item.orderId} totals $${item.amount.toFixed(2)}.`;
      default:
        return processUnexpectedItem(item);
    }
  });
}

function processUnexpectedItem(item: never): string {
  console.warn('Unexpected item type:', item);
  return 'Unknown data type encountered';
}

const mixedData: MixedData[] = [
  { type: 'user', name: 'Alice', age: 30 },
  { type: 'product', id: 123, price: 19.99 },
  { type: 'order', orderId: 'ORD-456', amount: 99.50 },
  // { type: 'unknown' } // This would cause a TypeScript error
];

const results = handleData(mixedData);
results.forEach(result => console.log(result));

