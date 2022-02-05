import React from "react";
import "./AreaDetails.css";

function AreaDetails(props) {
  return (
    <React.Fragment>
      {Object.keys(props.areaUsers).length !== 0 ? (
        <div className="areaDetailContent">
          <div>
            <div>
              <b>Users: </b>{" "}
            </div>
            <div>
              <span className="areaDetailChip">
                {props.areaUsers.perAreaUsers}
              </span>
              <span className="areaDetailChip">
                <b>M:</b> {props.areaUsers.maleUsers}
              </span>
              <span className="areaDetailChip">
                <b>F:</b> {props.areaUsers.femaleUsers}
              </span>
            </div>
          </div>
          <div>
            <div>
              <b>Pro Users: </b>{" "}
            </div>
            <div>
              <span className="areaDetailChip">
                {props.areaUsers.totalProUsers}
              </span>
              <span className="areaDetailChip">
                <b>M:</b> {props.areaUsers.proMaleUsers}
              </span>
              <span className="areaDetailChip">
                <b>F:</b> {props.areaUsers.proFemaleUsers}
              </span>
            </div>
          </div>
          <div>
            <div>
              <b>UnPro Users: </b>{" "}
            </div>
            <div>
              <span className="areaDetailChip">
                {props.areaUsers.totalUnProUsers}
              </span>
              <span className="areaDetailChip">
                <b>M:</b> {props.areaUsers.unProMaleUsers}
              </span>
              <span className="areaDetailChip">
                <b>F:</b> {props.areaUsers.unProFemaleUsers}
              </span>
            </div>
          </div>
          <div className="areaDetailBox">
            <div>
              <b>Revenue per area: </b>{" "}
            </div>
            <div>
              <span className="areaDetailChip">
                {props.areaUsers.totalProUsers}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
}

export default AreaDetails;
