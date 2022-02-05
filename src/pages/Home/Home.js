import React, { Component } from "react";
import { connect } from "react-redux";
import { TileLayer, Popup, MapContainer, Polygon } from "react-leaflet";

import "./Home.css";

import * as actions from "../../redux/actions/index";
import { Button } from "@mui/material";
import AreaDetails from "../../components/AreaDetails/AreaDetails";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 12.925164118329507,
      lng: 77.65465550101436,
      zoom: 11,
    };
  }

  onClickPolygon(data) {
    this.props.onAreaDetails(data, this.props.users);
  }

  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.onFetchUsers();
    }
    if (Object.keys(this.props.areas).length === 0) {
      this.props.onFetchAreas();
    }
  }

  setClearAreaDetails = () => {
    this.props.onClearAreaDetails({});
  };

  render() {
    let geometry = this.props.areas.features ? this.props.areas.features : [];
    const position = [this.state.lat, this.state.lng];
    return (
      <React.Fragment>
        <MapContainer
          className="map"
          center={position}
          zoom={this.state.zoom}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {geometry.length > 0
            ? geometry.map((data, i) => {
                return (
                  <Polygon
                    key={i}
                    pathOptions={{ color: "red" }}
                    positions={data.geometry.coordinates[0]}
                  >
                    <Popup
                      minWidth={200}
                      children={"TEST"}
                      onClose={this.setClearAreaDetails}
                      closeOnClick={false}
                    >
                      <div className="popupBox">
                        <div className="popupHeader">
                          <h2>{data.properties.name}</h2>
                        </div>
                        <AreaDetails areaUsers={this.props.areaUsers} />
                        {Object.keys(this.props.areaUsers).length === 0 ? (
                          <div className="popupButton">
                            <Button
                              size="small"
                              onClick={() =>
                                this.onClickPolygon(data.properties)
                              }
                            >
                              Details
                            </Button>
                          </div>
                        ) : null}
                      </div>
                    </Popup>
                  </Polygon>
                );
              })
            : null}
        </MapContainer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    areas: state.areas.areas,
    areaUsers: state.areas.areaUsers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUsers: () => dispatch(actions.fetchUsers()),
    onFetchAreas: () => dispatch(actions.fetchAreas()),
    onAreaDetails: (area, users) =>
      dispatch(actions.getAreaDetails(area, users)),
    onClearAreaDetails: (data) => dispatch(actions.getClearAreaDetails(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
