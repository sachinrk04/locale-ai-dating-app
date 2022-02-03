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
