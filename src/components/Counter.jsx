/* eslint-disable react/prop-types */
//Internal Imports
import Count from "./Count";
import Button from "./Button";

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div>
      <Count count={count} />
      <Button onHandle={onIncrement}>Incremanet</Button>
      <Button onHandle={onDecrement}>Decremanet</Button>
    </div>
  );
};

export default Counter;
