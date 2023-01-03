// try to remove the value case
export const reducer = (state, action) => {
  const resetCount = value => {
    return {
      count1: value,
      count2: value,
      count3: value,
      count4: value,
      count5: value,
    };
  };
  switch (action.type) {
    case 'Flex-Direction':
      return { ...state, value: 0, box: 5, className: 'fd-Row' };
    case 'Flex-Wrap':
      return { ...state, value: 1, box: 12, className: 'fw-Wrap' };
    case 'Align-Items':
      return { ...state, value: 2, box: 5, className: 'ai-FlexStart' };
    case 'Justify-Content':
      return { ...state, value: 3, box: 5, className: 'jc-FlexStart' };
    case 'Align-Content':
      return { ...state, value: 4, box: 5, className: 'ac-FlexStart' };
    case 'Align-Self':
      return { ...state, value: 5, box: 5, className: 'as-Auto' };
    case 'Flex-Grow':
      return {
        ...state,
        value: 6,
        box: 5,
        className: 'Flex-Grow',
        active: !state.active,
        ...resetCount(1),
      };
    case 'Flex-Shrink':
      return {
        ...state,
        value: 7,
        box: 5,
        className: 'Flex-Shrink',
        active: !state.active,
        ...resetCount(1),
      };
    case 'Order':
      return {
        ...state,
        value: 8,
        box: 5,
        className: 'Order',
        active: !state.active,
        ...resetCount(0),
      };

    case 'className':
      return { ...state, className: action.payload };

    case 'updateCount':
      return {
        ...state,
        [`count${action.payload.index}`]: action.payload.value,
      };

    default:
      return state;
  }
};

export const initialState = {
  value: 3,
  box: 3,
  className: 'jc-SpaceBetween',
  active: false,
  count1: 0,
  count2: 0,
  count3: 0,
  count4: 0,
  count5: 0,
};
