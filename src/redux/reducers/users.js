import * as actionTypes from "../actionTypes";

const initialState = {
  users: [],
  areasUsers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case actionTypes.AREAS_USERS:
      return {
        ...state,
        areasUsers: action.areasUsers,
      };
    default:
      return state;
  }
};

export default reducer;
