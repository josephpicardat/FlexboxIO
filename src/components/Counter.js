import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../utils/UserProvider';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { flexed } from '../utils/flex';
import './css/Count.css';

const Counter = index => {
  const [state, dispatch] = useContext(UserContext);

  let value;
  let order;
  if (flexed[state.value].name === 'Order') {
    value = 0;
    order = true;
  } else {
    value = 1;
    order = false;
  }

  const [count, setCount] = useState(value);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--Element' + index.index,
      count,
    );
  }, [count, index]);

  const increment = () => {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  };

  const decrement = () => {
    if (order) {
      setCount(function (prevCount) {
        if (prevCount > 0) {
          return (prevCount -= 1);
        } else {
          return (prevCount = 1);
        }
      });
    } else {
      setCount(function (prevCount) {
        if (prevCount > 1) {
          return (prevCount -= 1);
        } else {
          return (prevCount = 1);
        }
      });
    }
  };

  return (
    <div className="counterWrapper">
      {count}
      <div className="iconButtons">
        <FiChevronUp
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
