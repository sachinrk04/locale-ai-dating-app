import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Drawer } from "@mui/material";
import Headers from "./components/Headers/Headers";
import Drawers from "./components/Drawers/Drawers";
import Home from "./pages/Home/Home";
import AllList from "./pages/AllList/AllList";
import AreasList from "./pages/AreasList/AreasList";

import "./App.css";

const drawerWidth = 250;

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Headers />
      <Box sx={{ display: "flex" }}>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                background: "lightgrey",
              },
            }}
          >
            <Drawers />
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                background: "lightgrey",
              },
            }}
            open
          >
            <Drawers />
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 0,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            marginTop: "65px",
          }}
        >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/all-list" element={<AllList />} />
            <Route path="/area-list" element={<AreasList />} />
          </Routes>
        </Box>
      </Box>
    </div>
  );
}

export default App;
