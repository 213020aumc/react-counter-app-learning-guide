import Button from "./common/Button";
import useCounter from "../hooks/useCounter";
import "../index.css";
import { Fragment } from "react";

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(0, 1);

  return (
    <Fragment>
      <h1> Counter App</h1>
      <h2>{count}</h2>
      <Button onClick={increment}>➕ Increment</Button>
      {count > 0 && <Button onClick={decrement}>➖ Decrement</Button>}
      <Button onClick={reset}>🔄 Reset</Button>
    </Fragment>
  );
};

export default Counter;
