import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function QueryForm(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={props.onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Limit"
            name="QueryLimit"
            type="Number"
            placeholder="Number of documents to annotate"
            onInput={props.onInput}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="QueryCountry"
            label="Country"
            placeholder="Country code (eg.: DK)"
            onInput={props.onInput}
            inputProps={{
              maxLength: 2
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            size="large"
          >
            Query
          </Button>
        </form>
      </div>
    </Container>
  );
}