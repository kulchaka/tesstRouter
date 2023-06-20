import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Link to="/home">Home</Link>
        <Link style={{ marginLeft: "20px" }} to="/about">
          About
        </Link>
      </Toolbar>
    </AppBar>
  );
};
