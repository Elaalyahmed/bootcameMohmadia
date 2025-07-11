import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [lastAction, setLastAction] = useState<string | null>(null);

  const increment = () => {
    setCount(prev => prev + 1);
    setLastAction('incremented');
  };

  const decrement = () => {
    setCount(prev => prev - 1);
    setLastAction('decremented');
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      {lastAction && <p>Last action: {lastAction}</p>}
    </div>
  );
};