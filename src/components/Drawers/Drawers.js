import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import "./Drawers.css";

function Drawers() {
  return (
    <React.Fragment>
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List className="DrawList">
          <Link to="/">
            <ListItem button>
              <ListItemText>Map</ListItemText>
            </ListItem>
          </Link>
          <Link to="/all-list">
            <ListItem button>
              <ListItemText>All List</ListItemText>
            </ListItem>
          </Link>
          <Link to="/area-list">
            <ListItem button>
              <ListItemText>Areas</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Box>
    </React.Fragment>
  );
}

export default Drawers;
