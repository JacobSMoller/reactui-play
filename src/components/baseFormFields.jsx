import React from "react";
import AmountField from "./amountField";
import StringField from "./stringField";
import DateField from "./dateField";

function BaseForm(props) {
  return (
    <React.Fragment>
      <StringField
        key="supplier_corporate_id"
        styles={props.styles}
        label="supplier_corporate_id"
        value={props.values.supplier_corporate_id}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder="VAT/ORG/MVA Number"
        errorText={props.errormsgs.supplier_corporate_id}
      />
      <AmountField
        key="total_incl_vat"
        styles={props.styles}
        label="total_incl_vat"
        value={props.values.total_incl_vat}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder="Amount(format: 100.00)"
        errorText={props.errormsgs.total_incl_vat}
      />
      <AmountField
        key="total_vat"
        styles={props.styles}
        label="total_vat"
        value={props.values.total_vat}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder="Amount(format: 100.00)"
        errorText={props.errormsgs.total_vat}
      />
      <AmountField
        key="total_excl_vat"
        styles={props.styles}
        label="total_excl_vat"
        value={props.values.total_excl_vat}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder="Amount(format: 100.00)"
        errorText={props.errormsgs.total_excl_vat}
      />
      <StringField
        key="currency"
        styles={props.styles}
        label="currency"
        value={props.values.currency}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder="3 letter currency code (eg.: DKK)"
        errorText={props.errormsgs.currency}
      />
      <DateField
        key="order_date"
        label="order_date"
        styles={props.styles}
        disabled={false}
        onDateInput={props.onDateInput}
        value={props.values.order_date}
        onMissing={props.onMissing}
      />
    </React.Fragment>
  );
}

export default BaseForm;
