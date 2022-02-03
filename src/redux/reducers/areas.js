import * as actionTypes from "../actionTypes";

const initialState = {
  areas: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_AREAS:
      return {
        ...state,
        areas: action.areas,
      };
    default:
      return state;
  }
};

export default reducer;
