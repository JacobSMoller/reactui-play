import React from "react";
import TextField from "@material-ui/core/TextField";

const styles = {
  TextField: {
    padding: 4
  }
};

function AmountField(props) {
  const errorText = props.errorText;
  const error = errorText ? true : false;
  return (
    <TextField
      style={styles.TextField}
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
      fullWidth
      helperText={errorText}
      error={error}
      type="number"
    />
  );
}

export default AmountField;
