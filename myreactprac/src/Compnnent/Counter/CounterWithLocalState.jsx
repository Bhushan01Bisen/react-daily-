import { useState } from "react";

export const CounterWithLocalState = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleCount}>inc Count{count}</button>
    </div>
  );
};
