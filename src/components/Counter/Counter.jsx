import { useCounter } from "../../Hooks/useCounter";

const Counter = () => {

    const {count, increment, decrement, reset} = useCounter();


  return (
    <>
      <button onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
      <button onClick={reset}>
        Reset
      </button>
      <div>result: {count}</div>
    </>
  );
};

export default Counter;
