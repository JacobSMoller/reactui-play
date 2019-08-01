import React from "react";
import TextField from "@material-ui/core/TextField";

function AmountField(props) {
  const errorText = props.errorText;
  const error = errorText ? true : false;
  return (
    <TextField
      style={props.styles.InputField}
      key={props.label}
      id="outlined-name"
      label={props.label}
      placeholder={
        props.placeholder ? props.placeholder : "Amount(format: 100.00)"
      }
      defaultValue={props.value}
      margin="normal"
      variant="outlined"
      onChange={props.onChange}
      onBlur={props.onBlur}
      name={props.label}
      helperText={errorText}
      error={error}
      type="number"
      inputProps={{ step: 0.01 }}
    />
  );
}

export default AmountField;
