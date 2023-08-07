import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Toolbar, Typography, Button, AppBar } from "@mui/material";
import Logo from "../assets/l.png";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <AppBar position="static">
        <Toolbar
          style={{
            backgroundColor: "#b8e2f0",
            height: "10px",
            position: "fixed",
            width: "98%",
          }}
        >
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <img
              src={Logo}
              alt="InfraBlok India Pvt. Ltd"
              style={{ width: "auto", height: "30px" }}
            />
          </Typography>
          <Button
            component={Link}
            to="/"
            style={{
              color: location.pathname === "/" ? "blue" : "black",
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            style={{
              color: location.pathname === "/about" ? "blue" : "black",
            }}
          >
            About
          </Button>
          <Button
            component={Link}
            to="/team"
            style={{
              color: location.pathname === "/team" ? "blue" : "black",
            }}
          >
            Our Teams
          </Button>
          <Button
            component={Link}
            to="/project"
            style={{
              color: location.pathname === "/project" ? "blue" : "black",
            }}
          >
            Projects
          </Button>
          <Button
            component={Link}
            to="/contact"
            style={{
              color: location.pathname === "/contact" ? "blue" : "black",
            }}
          >
            Contact
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Navbar;