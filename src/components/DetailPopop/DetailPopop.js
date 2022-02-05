import React from "react";
import { connect } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import * as actions from "../../redux/actions/index";
import MapBox from "../MapBox/MapBox";

import "./DetailPopop.css";
import AreaDetails from "../AreaDetails/AreaDetails";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DetailPopop(props) {
  const handleClose = () => {
    props.onOpenClose(false);
    props.onAreaData({});
    props.onClearAreaDetails({});
  };

  return (
    <div className="popup-box">
      {Object.keys(props.area).length !== 0 ? (
        <Dialog
          open={props.openClose}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          fullWidth={true}
          maxWidth={"md"}
        >
          <DialogTitle>{props.area.properties.name}</DialogTitle>
          <DialogContent>
            <div>
              {Object.keys(props.area).length !== 0 ? (
                <MapBox area={props.area} />
              ) : null}
            </div>
          </DialogContent>
          <DialogContent>
            <AreaDetails areaUsers={props.areaUsers} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    openClose: state.common.isOpen,
    area: state.areas.area,
    areaUsers: state.areas.areaUsers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenClose: (data) => dispatch(actions.popupOpenClose(data)),
    onAreaData: (data) => dispatch(actions.getAreaData(data)),
    onClearAreaDetails: (data) => dispatch(actions.getClearAreaDetails(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPopop);
