// try to remove the value case
export const reducer = (state, action) => {
  switch (action.type) {
    case 'Flex-Direction':
      return { value: 0, box: 5, className: 'fd-Row' };
    case 'Flex-Wrap':
      return { value: 1, box: 12, className: 'fw-Wrap' };
    case 'Align-Items':
      return { value: 2, box: 5, className: 'ai-FlexStart' };
    case 'Justify-Content':
      return { value: 3, box: 5, className: 'jc-FlexStart' };
    case 'Align-Content':
      return { value: 4, box: 5, className: 'ac-FlexStart' };
    case 'Align-Self':
      return { value: 5, box: 5, className: 'as-Auto' };
    case 'Flex-Grow':
      return { value: 6, box: 5, className: 'ac-FlexStart' };
    case 'Flex-Shrink':
      return { value: 6, box: 5, className: 'ac-FlexStart' };
    case 'Order':
      return { value: 8, box: 5, className: 'ac-FlexStart' };

    case 'className':
      return { ...state, className: action.payload };

    default:
      return state;
  }
};

export const initialState = {
  value: 3,
  box: 3,
  className: 'jc-SpaceBetween',
};
