import React from "react";
import Grid from "@material-ui/core/Grid";
import LeftPane from "./leftPane";
import RightPane from "./rightPane";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

function MainContent(props) {
  return (
    <Grid container spacing={2}>
      <Grid item sm={8} style={{ textAlign: "center" }}>
        <LeftPane styles={styles} imgUri={props.input["imgUri"]} />
      </Grid>
      <Grid item sm>
        <RightPane
          styles={styles}
          values={props.values}
          onSubmit={props.onSubmit}
          onInput={props.onInput}
          onDateInput={props.onDateInput}
        />
      </Grid>
    </Grid>
  );
}

export default MainContent;
