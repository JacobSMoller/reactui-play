import React from "react";
import TextField from "@material-ui/core/TextField";

const styles = {
  TextField: {
    padding: 4
  }
};

function StringField(props) {
  return (
    <TextField
      style={styles.TextField}
      key={props.label}
      id="outlined-name"
      label={props.label}
      placeholder={props.placeholder ? props.placeholder : "Free input"}
      defaultValue={props.value}
      margin="normal"
      variant="outlined"
      fullWidth
      onChange={props.onChange}
      name={props.label}
    />
  );
}

export default StringField;
