import * as actionTypes from "../actionTypes";

const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};

export default reducer;
