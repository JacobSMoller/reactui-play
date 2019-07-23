import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import DateField from "../dateField";
import AmountField from "../amountField";
import StringField from "../stringField";
import SelectField from "../selectField";

const styles = {
  TextField: {
    padding: 4
  }
};

const document_types = ["Receipt", "Invoice"];

const fieldsToRender = {
  Receipt: {
    supplier_corporate_id: { type: "Text", placeholder: "VAT/ORG/MVA  number" },
    total_incl_vat: { type: "Amount", placeholder: "Amount(format: 100.00)" },
    total_vat: { type: "Amount", placeholder: "Amount(format: 100.00)" },
    total_excl_vat: { type: "Amount", placeholder: "Amount(format: 100.00)" },
    payment_method: { type: "Text", placeholder: "CreditCard or Cash" },
    currency: {
      type: "Text",
      placeholder: "3 letter currency code (eg.: DKK)"
    },
    order_date: { type: "Date" },
    credit_card_last_four: { type: "Text", placeholder: "4 digits (eg.: 1234)" }
  },
  Invoice: {
    supplier_corporate_id: { type: "Text", placeholder: "VAT/ORG/MVA  number" },
    total_incl_vat: { type: "Amount", placeholder: "Amount(format: 100.00)" },
    total_vat: { type: "Amount", placeholder: "Amount(format: 100.00)" },
    total_excl_vat: { type: "Amount", placeholder: "Amount(format: 100.00)" },
    currency: {
      type: "Text",
      placeholder: "3 letter currency code (eg.: DKK)"
    },
    order_date: { type: "Date" },
    payment_due_date: { type: "Date" },
    invoice_number: { type: "Text", placeholder: "Free input" }
  }
};

const countryFieldsToRender = {
  DK: {
    ocr_line_dk_type: { type: "Text", placeholder: "2 Digits " },
    ocr_line_dk_payment_id: { type: "Text", placeholder: "Free input" },
    ocr_line_dk_creditor_id: { type: "Text", placeholder: "Free input" }
  },
  SE: {
    ocr_line_se_plusgiro_creditor_id: {
      type: "Text",
      placeholder: "Free input"
    },
    ocr_line_se_payment_id: { type: "Text", placeholder: "Free input" },
    ocr_line_se_bankgiro_creditor_id: {
      type: "Text",
      placeholder: "Free input"
    }
  },
  NO: {
    ocr_line_no_payment_id: { type: "Text", placeholder: "Free input" }
  },
  FI: {
    ocr_line_no_payment_id: { type: "Text", placeholder: "Free input" }
  }
};

class RightPane extends React.Component {
  renderTextFields(fields) {
    let textFields = [];
    const document_type = this.props.values.document_type;
    const country_code = this.props.values.supplier_country_code;
    // Document type field is always present.
    textFields.push(
      <SelectField
        key="document_type"
        styles={styles}
        label="document_type"
        value={document_type}
        onChange={this.props.onInput}
        docTypes={document_types}
      />
    );
    // Country code field is always present.
    textFields.push(
      <StringField
        key="supplier_country_code"
        styles={styles}
        label="supplier_country_code"
        value={country_code}
        onChange={this.props.onInput}
        placeholder="Format (alpha 2 country code eg.: DK)"
      />
    );
    console.log(textFields);
    let docFields = fieldsToRender[document_type];
    // If we have a 2 digit country code merge potential country specific fields
    // to the list of fields we should show.
    if (
      country_code &&
      country_code.length === 2 &&
      document_type === "Invoice"
    ) {
      docFields = { ...docFields, ...countryFieldsToRender[country_code] };
    }

    for (let key in docFields) {
      const type = docFields[key]["type"];
      const value = this.props.values[key];
      if (type === "Date") {
        textFields.push(
          <DateField
            key={key}
            label={key}
            styles={styles}
            disabled={false}
            onDateInput={this.props.onDateInput}
          />
        );
      } else if (type === "Amount") {
        textFields.push(
          <AmountField
            key={key}
            styles={styles}
            label={key}
            value={value}
            onChange={this.props.onInput}
            placeholder={docFields[key]["placeholder"]}
          />
        );
      } else {
        textFields.push(
          <StringField
            key={key}
            styles={styles}
            label={key}
            value={value}
            onChange={this.props.onInput}
            placeholder={docFields[key]["placeholder"]}
          />
        );
      }
    }
    return textFields;
  }
  render() {
    const textFields = this.renderTextFields(this.props.values);
    return (
      <Paper style={this.props.styles.Paper}>
        <form onSubmit={this.props.onSubmit}>
          {textFields}
          <Button type="submit" fullWidth variant="contained" color="primary">
            Annotate document
          </Button>
        </form>
      </Paper>
    );
  }
}

export default RightPane;
