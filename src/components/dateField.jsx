import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import Button from "@material-ui/core/Button";

function DateField(props) {
  const apiDate = props.value ? new Date(props.value) : new Date();
  const [selectedDate, handleDateChange] = useState(apiDate);
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        label={props.label}
        key={props.label}
        name={props.label}
        format="yyyy/MM/dd"
        InputAdornmentProps={{ position: "start" }}
        InputProps={{
          endAdornment: (
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => {
                handleDateChange(null);
                props.onMissing(props.label);
              }}
            >
              Missing
            </Button>
          )
        }}
        onChange={date => {
          handleDateChange(date);
          props.onDateInput(date, props.label);
        }}
        value={selectedDate}
        margin="normal"
        style={props.styles.InputField}
        fullWidth
        disabled={props.disabled}
      >
        <p>foo</p>
      </KeyboardDatePicker>
    </MuiPickersUtilsProvider>
  );
}

export default DateField;
