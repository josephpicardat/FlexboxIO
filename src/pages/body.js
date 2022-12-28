import React, { useState, useContext } from 'react';
import { UserContext } from '../utils/UserProvider';
import Property from '../components/SelectedProperty';
import BoxLoop from '../components/BoxLoop';
import '../components/css/Body.css';
import '../components/css/flex.css';
import '../components/css/Property.css';

function Body() {
  const [state, dispatch] = useContext(UserContext);

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
      <section
        className={
          'backgroundBox ' +
          (state.value < 5 ? state.className : 'flexItemContainer')
        }
      >
        <BoxLoop />
      </section>
    </div>
  );
}
export default Body;
