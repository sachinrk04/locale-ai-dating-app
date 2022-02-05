import * as actionTypes from "../actionTypes";

export const popupOpenClose = (data) => {
  return {
    type: actionTypes.POPUP_OPEN_CLOSE,
    openClose: data,
  };
};
