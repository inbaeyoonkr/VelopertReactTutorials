import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increaseAsync, decreaseAsync } from '../modules/counter';

const CounterContainer = ({ increaseAsync, decreaseAsync, number }) => {
  return (
    <Counter
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
      number={number}
    />
  );
};

export default connect(
  ({ counter }) => ({
    number: counter
  }),
  {
    increaseAsync,
    decreaseAsync
  }
)(CounterContainer);
