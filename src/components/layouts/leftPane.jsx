import React from "react";
import Paper from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";

function LeftPane(props) {
  const { styles } = props;
  return (
    <Paper style={styles.Paper}>
      <Card>
        <CardMedia component="img" src={props.imgUri} />
      </Card>
    </Paper>
  );
}

export default LeftPane;
