import * as actionTypes from "../actionTypes";

const initialState = {
  isOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POPUP_OPEN_CLOSE:
      return {
        ...state,
        isOpen: action.openClose,
      };
    default:
      return state;
  }
};

export default reducer;
