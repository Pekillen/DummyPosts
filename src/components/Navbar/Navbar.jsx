import React from "react";
import { Link } from "react-router-dom";
import { Typography, AppBar, Toolbar, Grid } from "@mui/material";
import theme from "../../styles/Styles";

import acterioPNG from "../../assets/acterio.png";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        marginBottom: "1.5rem",
        borderBottomLeftRadius: "1rem",
        borderBottomRightRadius: "1rem",
      }}
    >
      <Toolbar>
        <Grid container sx={{ width: "100%" }} display="flex">
          <Grid item xs={12} md={4}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={acterioPNG} alt="acterio" height="45px" />
            </Link>
          </Grid>

          <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.secondary.main,
                  margin: "0 auto",
                  ":hover": {
                    color: theme.palette.orange.main,
                    transition: "0.3s",
                  },
                }}
              >
                {" "}
                Dummy Posts{" "}
              </Typography>
            </Link>
          </Grid>

          <Grid item xs={12} md={4} display="flex"></Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
