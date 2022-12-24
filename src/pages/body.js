import React, { useState, useContext } from 'react';
import { UserContext } from '../utils/UserProvider';
import Property from '../components/SelectedProperty';
import '../components/css/Body.css';
import '../components/css/flex.css';
import '../components/css/Property.css';

function Body() {
  const [state, dispatch] = useContext(UserContext);

  const boxLoop = () => {
    return Array(state.box)
      .fill(0)
      .map((box, index) => (
        <div className="box" key={index}>
          <h6 className="text">Box {index + 1}</h6>
        </div>
      ));
  };

  return (
    <div className="wrapper">
      <h1 id="title">FlexBoxIO</h1>

      {/* Display Property */}
      <section className="selectedProperty">
        <Property />
      </section>

      {/* Display */}
      {/* if state.value is between 5 - 8 && state.classnma === align-self then box2 is this */}
      {/* use tenerary operator */}
      <section className={state.className}>{boxLoop()}</section>
    </div>
  );
}
export default Body;
