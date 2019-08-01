import React from "react";
import StringField from "./stringField";
import DateField from "./dateField";
import BaseForm from "./baseFormFields";
import CountryFields from "./countryFormFields";

function InvoiceForm(props) {
  console.log(props.styles, "InvoiceForm");
  return (
    <React.Fragment>
      <BaseForm
        styles={props.styles}
        values={props.values}
        onInput={props.onInput}
        onBlur={props.onBlur}
        onDateInput={props.onDateInput}
        onMissing={props.onMissing}
        errormsgs={props.errormsgs}
      />
      <DateField
        key="payment_due_date"
        label="payment_due_date"
        styles={props.styles}
        disabled={false}
        onDateInput={props.onDateInput}
        onMissing={props.onMissing}
        value={props.values.payment_due_date}
      />
      <StringField
        key="invoice_number"
        styles={props.styles}
        label="invoice_number"
        value={props.values.invoice_number}
        onChange={props.onInput}
        onBlur={props.onBlur}
        placeholder="Free input"
        errorText={props.errormsgs.invoice_number}
      />
      <CountryFields
        values={props.values}
        styles={props.styles}
        errormsgs={props.errormsgs}
        onChange={props.onInput}
        onBlur={props.onBlur}
      />
    </React.Fragment>
  );
}

export default InvoiceForm;
