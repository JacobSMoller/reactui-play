import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { format } from "date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";

function DateField(props) {
  const [selectedDate, handleDateChange] = useState(new Date());
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
        onChange={date => {
          handleDateChange(date);
          props.onDateInput(format(date, "yyyy/MM/dd"), props.label);
        }}
        value={selectedDate}
        margin="normal"
        style={props.styles.TextField}
        fullWidth
        disabled={props.disabled}
      />
    </MuiPickersUtilsProvider>
  );
}

export default DateField;
