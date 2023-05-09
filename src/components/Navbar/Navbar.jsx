import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, AppBar, Toolbar, Button } from "@mui/material";
import theme from "../../styles/Styles";

import acterioPNG from "../../acterio.png";

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        marginBottom: "1.5rem",
        borderBottomLeftRadius: "1rem",
        borderBottomRightRadius: "1rem",
      }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Box sx={{ display: "flex" }}>
            <img src={acterioPNG} alt="acterio" height="45px" />
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.secondary.main,
                marginBottom: 2,
                marginX: 2,
                ":hover": {
                  color: theme.palette.orange.main,
                  transition: "0.3s",
                },
              }}
            >
              {" "}
              Dummy Posts
              {" "}
            </Typography>
          </Box>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
