import React from "react";
import TextField from "@material-ui/core/TextField";

const styles = {
  TextField: {
    padding: 4
  }
};

function StringField(props) {
  const errorText = props.errorText;
  const error = errorText ? true : false;
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
      onBlur={props.onBlur}
      name={props.label}
      helperText={errorText}
      error={error}
    />
  );
}

export default StringField;
