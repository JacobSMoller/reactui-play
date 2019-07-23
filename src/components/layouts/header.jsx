import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function Header(props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="subtitle1" color="inherit">
          Annotate
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
