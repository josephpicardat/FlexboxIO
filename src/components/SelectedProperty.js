import React, { useState, useContext } from 'react';
import { flexed } from '../utils/flex';
import { UserContext } from '../utils/UserProvider';
import './css/Property.css';
import './css/Body.css';

const Property = () => {
  const [state, dispatch] = useContext(UserContext);

  return (
    <div className="propertyWrapper">
      <h2 className="propertyName">{flexed[state.value].name}</h2>
      {/* argument: own component */}
      <ul className="propertyList">
        {flexed[state.value].array.map((flexes, index) => (
          // own component =>
          //   </ Component flexes=(flexes) />
          <li
            key={index}
            className="propertyItems"
            onClick={() => {
              dispatch({ type: 'className', payload: flexes });
            }}
          >
            <button
              className={
                state.className === flexes
                  ? 'filledPropertyButtons'
                  : 'propertyButtons'
              }
            ></button>
            {/* Radio button => look up */}
            {flexes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Property;
