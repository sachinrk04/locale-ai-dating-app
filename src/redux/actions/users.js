import axios from "axios";
import * as actionTypes from "../actionTypes";

export const getUesrsData = (data) => {
  return {
    type: actionTypes.GET_USERS,
    users: data,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    axios
      .get("https://kyupid-api.vercel.app/api/users")
      .then((response) => {
        if (response.status === 200) {
          dispatch(getUesrsData(response.data.users));
        } else {
          dispatch(getUesrsData([]));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
