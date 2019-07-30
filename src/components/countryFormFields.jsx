import React from "react";
import StringField from "./stringField";

function CountryFields(props) {
  switch (props.values.supplier_country_code) {
    case "DK":
      return (
        <React.Fragment>
          <StringField
            key="ocr_line_dk_type"
            styles={props.styles}
            label="ocr_line_dk_type"
            value={props.values.ocr_line_dk_type}
            onChange={props.onChange}
            onBlur={props.onBlur}
            placeholder="Free input"
            errorText={props.errormsgs.ocr_line_dk_type}
          />
          <StringField
            key="ocr_line_dk_payment_id"
            styles={props.styles}
            label="ocr_line_dk_payment_id"
            value={props.values.ocr_line_dk_payment_id}
            onChange={props.onChange}
            onBlur={props.onBlur}
            placeholder="Free input"
            errorText={props.errormsgs.ocr_line_dk_payment_id}
          />
          <StringField
            key="ocr_line_dk_creditor_id"
            styles={props.styles}
            label="ocr_line_dk_creditor_id"
            value={props.values.ocr_line_dk_creditor_id}
            onChange={props.onChange}
            onBlur={props.onBlur}
            placeholder="Free input"
            errorText={props.errormsgs.ocr_line_dk_creditor_id}
          />
        </React.Fragment>
      );
    case "SE":
      return (
        <React.Fragment>
          <StringField
            key="ocr_line_se_payment_id"
            styles={props.styles}
            label="ocr_line_se_payment_id"
            value={props.values.ocr_line_se_payment_id}
            onChange={props.onChange}
            onBlur={props.onBlur}
            placeholder="Free input"
            errorText={props.errormsgs.ocr_line_se_payment_id}
          />
          <StringField
            key="ocr_line_se_bankgiro_creditor_id"
            styles={props.styles}
            label="ocr_line_se_bankgiro_creditor_id"
            value={props.values.ocr_line_se_bankgiro_creditor_id}
            onChange={props.onChange}
            onBlur={props.onBlur}
            placeholder="Free input"
            errorText={props.errormsgs.ocr_line_se_bankgiro_creditor_id}
          />
          <StringField
            key="ocr_line_se_plusgiro_creditor_id"
            styles={props.styles}
            label="ocr_line_se_plusgiro_creditor_id"
            value={props.values.ocr_line_se_plusgiro_creditor_id}
            onChange={props.onChange}
            onBlur={props.onBlur}
            placeholder="Free input"
            errorText={props.errormsgs.ocr_line_se_plusgiro_creditor_id}
          />
        </React.Fragment>
      );
    case "FI":
      return (
        <React.Fragment>
          <StringField
            key="ocr_line_fi_payment_id"
            styles={props.styles}
            label="ocr_line_fi_payment_id"
            value={props.values.ocr_line_fi_payment_id}
            onChange={props.onChange}
            onBlur={props.onBlur}
            placeholder="Free input"
            errorText={props.errormsgs.ocr_line_fi_payment_id}
          />
        </React.Fragment>
      );
    case "NO":
      return (
        <React.Fragment>
          <StringField
            key="ocr_line_no_payment_id"
            styles={props.styles}
            label="ocr_line_no_payment_id"
            value={props.values.ocr_line_no_payment_id}
            onChange={props.onChange}
            onBlur={props.onBlur}
            placeholder="Free input"
            errorText={props.errormsgs.ocr_line_no_payment_id}
          />
        </React.Fragment>
      );
    default:
      return null;
  }
}

export default CountryFields;
