import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Headers() {
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            <Link to="/">
              {" "}
              <b>Locale.ai</b>{" "}
            </Link>
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              marginLeft: "20px",
            }}
          >
            <Typography sx={{ minWidth: 100 }}>
              <Link to="/revenue">Revenue</Link>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Headers;
