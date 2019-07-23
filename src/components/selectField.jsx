import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const styles = {
  TextField: {
    padding: 4
  }
};

function SelectField(props) {
  console.log(props.value);
  return (
    <TextField
      style={styles.TextField}
      key={props.label}
      id="outlined-name"
      label={props.label}
      placeholder={props.placeholder ? props.placeholder : "Free input"}
      value={props.value}
      margin="normal"
      variant="outlined"
      fullWidth
      onChange={props.onChange}
      name={props.label}
      select
    >
      {props.docTypes.map(doc_type => (
        <MenuItem key={doc_type} value={doc_type}>
          {doc_type}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default SelectField;
