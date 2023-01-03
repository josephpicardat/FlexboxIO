import React, { useContext } from 'react';
import { UserContext } from '../utils/UserProvider';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import './css/Count.css';

const Counter = index => {
  const [state, dispatch] = useContext(UserContext);

  const updateCount = value => {
    dispatch({ type: `updateCount`, payload: { index, value } });
  };
  const increment = () => {
    console.log('not disabled');
    updateCount((state[`count${index.index}`] += 1));
  };

  const decrement = () => {
    let value = (state[`count${index.index}`] -= 1);
    let checkValue = 1;
    if (state.className === 'Order') {
      checkValue = 0;
    }
    if (value <= checkValue) {
      value = checkValue;
    }

    updateCount(value);
  };

  // let count = true;

  return (
    <div className="counterWrapper">
      {state[`count${index.index}`]}
      <div className="iconButtons">
        <FiChevronUp
          disabled={false}
          onClick={() => {
            increment();
          }}
          className="upArrow"
        />
        <FiChevronDown
          onClick={() => {
            decrement();
          }}
          className="downArrow"
        />
      </div>
    </div>
  );
};

export default Counter;
