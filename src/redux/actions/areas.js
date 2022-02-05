import axios from "axios";
import * as actionTypes from "../actionTypes";

export const getAreasData = (data) => {
  return {
    type: actionTypes.GET_AREAS,
    areas: data,
  };
};

export const fetchAreas = () => {
  return (dispatch) => {
    axios
      .get("https://kyupid-api.vercel.app/api/areas")
      .then((response) => {
        if (response.status === 200) {
          response.data.features.forEach((feature) => {
            for (let i = 0; i < feature.geometry.coordinates[0].length; i++) {
              feature.geometry.coordinates[0][i].reverse();
            }
          });
          dispatch(getAreasData(response.data));
        } else {
          dispatch(getAreasData({}));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getAreaData = (data) => {
  return {
    type: actionTypes.GET_AREA,
    area: data,
  };
};

export const getAreaDetails = (area, users) => {
  var newArray = users.filter(function (el) {
    return el.area_id === area.area_id;
  });
  var newArrayM = newArray.filter((el) => {
    return el.gender === "M";
  });
  var newArrayPro = newArray.filter((el) => {
    return el.is_pro_user;
  });
  var newArrayProM = newArrayPro.filter((el) => {
    return el.gender === "M";
  });
  var newArrayUnPro = newArray.filter((el) => {
    return !el.is_pro_user;
  });
  var newArrayUnProM = newArrayUnPro.filter((el) => {
    return el.gender === "M";
  });

  let areaDetails_users = {
    perAreaUsers: newArray.length,
    maleUsers: newArrayM.length,
    femaleUsers: newArray.length - newArrayM.length,
    totalProUsers: newArrayPro.length,
    proMaleUsers: newArrayProM.length,
    proFemaleUsers: newArrayPro.length - newArrayProM.length,
    totalUnProUsers: newArrayUnPro.length,
    unProMaleUsers: newArrayUnProM.length,
    unProFemaleUsers: newArrayUnPro.length - newArrayUnProM.length,
  };

  return {
    type: actionTypes.GET_AREA_DETAILS,
    areaUsersDetails: areaDetails_users,
  };
};

export const getClearAreaDetails = (data) => {
  return {
    type: actionTypes.GET_CLEAR_AREA_DETAILS,
    clearDetails: data,
  };
};
