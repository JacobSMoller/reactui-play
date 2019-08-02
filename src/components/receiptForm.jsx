import React from "react";
import BaseForm from "./baseFormFields";
import StringField from "./stringField";

function ReceiptForm(props) {
  return (
    <React.Fragment>
      <BaseForm
        styles={props.styles}
        values={props.values}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onDateInput={props.onDateInput}
        onMissing={props.onMissing}
        errormsgs={props.errormsgs}
      />
      <StringField
        key="payment_method"
        styles={props.styles}
        label="payment_method"
        value={props.values.payment_method}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder="CreditCard or Cash"
        errorText={props.errormsgs.payment_method}
      />
      <StringField
        key="credit_card_last_four"
        styles={props.styles}
        label="credit_card_last_four"
        value={props.values.credit_card_last_four}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder="4 digits (eg.: 1234)"
        errorText={props.errormsgs.credit_card_last_four}
      />
    </React.Fragment>
  );
}

export default ReceiptForm;
