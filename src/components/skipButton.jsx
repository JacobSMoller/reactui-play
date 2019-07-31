import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/ClearOutlined";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(2)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  }
}));

export default function SkipButton(props) {
  const classes = useStyles();

  return (
    <Button
      fullWidth
      variant="contained"
      color="secondary"
      className={classes.button}
      onClick={props.onSkip}
      disabled={props.loading}
    >
      {props.loading && <CircularProgress color="inherit" size={20} />}
      Skip Document
      <ClearIcon className={classes.rightIcon} />
    </Button>
  );
}
