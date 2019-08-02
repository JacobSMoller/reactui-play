import React from "react";
import TextField from "@material-ui/core/TextField";

function StringField(props) {
  const errorText = props.errorText;
  const error = errorText ? true : false;
  return (
    <TextField
      style={props.styles.InputField}
      key={props.label}
      id="outlined-name"
      label={props.label}
      placeholder={props.placeholder ? props.placeholder : "Free input"}
      defaultValue={props.value ? props.value : null}
      margin="normal"
      variant="outlined"
      onChange={props.onChange}
      onBlur={props.onBlur}
      name={props.label}
      helperText={errorText}
      error={error}
      required={props.required ? props.required : false}
    />
  );
}

export default StringField;
