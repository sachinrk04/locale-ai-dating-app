import * as actionTypes from "../actionTypes";

const initialState = {
  areas: {},
  area: {},
  areaUsers: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_AREAS:
      return {
        ...state,
        areas: action.areas,
      };
    case actionTypes.GET_AREA:
      return {
        ...state,
        area: action.area,
      };
    case actionTypes.GET_AREA_DETAILS:
      return {
        ...state,
        areaUsers: action.areaUsersDetails,
      };
    case actionTypes.GET_CLEAR_AREA_DETAILS:
      return {
        ...state,
        areaUsers: action.clearDetails,
      };
    default:
      return state;
  }
};

export default reducer;
