import React from "react";
import { Button } from "@mui/material";

const Counter = (props) => {
  const { counter, onIncrement, onDelete, onDecrement } = props;
  return (
    <>
      <p>{counter.value}</p>
      <Button
        variant="outlined"
        color="success"
        onClick={() => onIncrement(counter)}
      >Increment
      </Button>
      <Button
        variant="outlined"
        color="error"
        onClick={() => onDecrement(counter)}
        disabled={counter.value === 0}
      >Decrement
      </Button>
      <Button variant="outlined" onClick={() => onDelete(counter.id)}>
        Delete
      </Button>
    </>
  );
};

export default Counter;
