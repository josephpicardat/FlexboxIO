import React, { useState } from 'react';
import '../components/css/Body.css';
import '../components/css/flex.css';
import '../components/css/Property.css';

function Body() {
  const [flex, setFlex] = useState('jc-SpaceBetween');
  const [button, setButton] = useState('propertyButtons');

  const flexed = {
    flexDirection: ['fd-Row', 'fd-RowReverse', 'fd-column', 'fd-ColumnReverse'],
    flexWrap: ['fw-NoWrap', 'fw-Wrap', 'fw-WrapReverse'],
    alignItems: [
      'ai-FlexStart',
      'ai-FlexEnd',
      'ai-Center',
      'ai-Baseline',
      'ai-stretch',
    ],
    justifyContent: [
      'jc-FlexStart',
      'jc-FlexEnd',
      'jc-SpaceBetween',
      'jc-Center',
      'jc-SpaceAround',
    ],
    alignContent: [
      'ac-FlexStart',
      'ac-FlexEnd',
      'ac-Center',
      'ac-SpaceBetween',
      'ac-SpaceAround',
      'ac-Stretch',
    ],
  };

  const Property = flexed => {
    return (
      <div className="propertyWrapper">
        <h2 className="propertyName">Justify-Content:</h2>
        <ul className="propertyList">
          {flexed.map((flexes, index) => (
            <li
              key={index}
              className="propertyItems"
              onClick={() => {
                setFlex(flexes);
                setButton('filledPropertyButtons');
              }}
            >
              <button className={button}></button>
              {flexes}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="wrapper">
      <h1 id="title">FlexBoxIO</h1>

      {/* Display Property */}
      <section className="selectedProperty">
        {Property(flexed.justifyContent)}
      </section>

      {/* Display */}
      <section className={flex}>
        <div className="box">
          <h6 className="text">Box 1</h6>
        </div>
        <div className="box">
          <h6 className="text">Box 2</h6>
        </div>
        <div className="box">
          <h6 className="text">Box 3</h6>
        </div>
      </section>
    </div>
  );
}
export default Body;
