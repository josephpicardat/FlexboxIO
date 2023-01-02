import React, { useContext } from 'react';
import { UserContext } from '../utils/UserProvider';
import './css/Body.css';
import './css/flex.css';

const BoxLoop = () => {
  const [state, dispatch] = useContext(UserContext);

  // Normal array
  const array = Array(state.box);
  const allBoxes = array.fill(0).map((box, index) => (
    <div className="boxStyle box" key={index}>
      <h6 className="text">Box {index + 1}</h6>
    </div>
  ));

  // calculating array for changes for indiviudal boxes
  const middleArrayOperator = Math.trunc(state.box / 2);

  const middleBoxes = Array(state.box)
    .fill(0)
    .map((box, index) => (
      <div
        className={
          'boxStyle ' + (index === middleArrayOperator ? 'tallBox' : 'box')
        }
        key={index}
      >
        <h6 className="text">Box {index + 1}</h6>
      </div>
    ));

  const virticalStretch = Array(state.box)
    .fill(0)
    .map((box, index) => (
      <div className="boxStyle autoBoxHeight" key={index}>
        <h6 className="text">Box {index + 1}</h6>
      </div>
    ));

  // Calculating horizontal stretch
  const horizontalStretch = Array(state.box)
    .fill(0)
    .map((box, index) => (
      <div className="boxStyle autoBoxWidth" key={index}>
        <h6 className="text">Box {index + 1}</h6>
      </div>
    ));

  // Calculating Flex Items
  const flexItems = Array(state.box)
    .fill(0)
    .map((box, index) => (
      <div
        className={
          'boxStyle ' +
          (index === middleArrayOperator ? state.className : 'box')
        }
        key={index}
      >
        <h6 className="text">Box {index + 1}</h6>
      </div>
    ));

  const GrowElements = Array(state.box)
    .fill(0)
    .map((box, index) => (
      <div className={'boxStyle box GrowElement-' + (index + 1)} key={index}>
        <h6 className="text">Box {index + 1}</h6>
      </div>
    ));
  const ShrinkElements = Array(state.box)
    .fill(0)
    .map((box, index) => (
      <div
        className={'boxStyle shrinkBox ShrinkElement-' + (index + 1)}
        key={index}
      >
        <h6 className="text">Box {index + 1}</h6>
      </div>
    ));
  const OrderElements = Array(state.box)
    .fill(0)
    .map((box, index) => (
      <div className={'boxStyle box OrderElement-' + (index + 1)} key={index}>
        <h6 className="text">Box {index + 1}</h6>
      </div>
    ));

  if (state.value < 5) {
    if (state.value === 2) {
      if (state.className === 'ai-Stretch') {
        console.log('align items stretch');
        return virticalStretch;
      } else {
        return middleBoxes;
      }
    }
    if (state.className === 'ac-Stretch') {
      console.log('align content stretch');
      return horizontalStretch;
    } else {
      return allBoxes;
    }
  } else if (state.value >= 5) {
    if (state.value === 5) {
      return flexItems;
    } else if (state.value === 6) {
      return GrowElements;
    } else if (state.value === 7) {
      return ShrinkElements;
    } else if (state.value === 8) {
      return OrderElements;
    } else {
      return;
    }
  } else {
    return;
  }
};

export default BoxLoop;
