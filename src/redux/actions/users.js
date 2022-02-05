import axios from "axios";
import * as actionTypes from "../actionTypes";

export const getUesrsData = (data) => {
  return {
    type: actionTypes.GET_USERS,
    users: data,
  };
};

export const getUesrsAreasData = (data) => {
  return {
    type: actionTypes.AREAS_USERS,
    areasUsers: data,
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

export const mergeBothDatas = (areas, users) => {
  let newArray = [];
  for (let i = 0; i < areas.features.length; i++) {
    newArray = users.filter((user) => {
      if (user.area_id === areas.features[i].properties.area_id) {
        user["area_name"] = areas.features[i].properties.name;
        user["pin_code"] = areas.features[i].properties.pin_code;
      }
      return user;
    });
  }
  return (dispatch) => {
    dispatch(getUesrsAreasData(newArray));
  };
};
