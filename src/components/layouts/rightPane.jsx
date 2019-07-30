import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import StringField from "../stringField";
import SelectField from "../selectField";
import ReceiptForm from "../receiptForm";
import InvoiceForm from "../invoiceForm";

const styles = {
  TextField: {
    padding: 4
  }
};

const document_types = ["Receipt", "Invoice"];

class RightPane extends React.Component {
  renderTextFields() {
    const document_type = this.props.values.document_type;
    switch (document_type) {
      case "Receipt":
        return (
          <ReceiptForm
            values={this.props.values}
            errormsgs={this.props.errormsgs}
            onInput={this.props.onInput}
            onBlur={this.props.onBlur}
            onDateInput={this.props.onDateInput}
            styles={styles}
          />
        );
      case "Invoice":
        return (
          <InvoiceForm
            values={this.props.values}
            errormsgs={this.props.errormsgs}
            onInput={this.props.onInput}
            onBlur={this.props.onBlur}
            onDateInput={this.props.onDateInput}
            styles={styles}
          />
        );
      default:
        return null;
    }
  }

  render() {
    console.log(this.props.values);
    const document_type = this.props.values.document_type;
    const country_code = this.props.values.supplier_country_code;

    return (
      <Paper style={this.props.styles.Paper}>
        <form onSubmit={this.props.onSubmit}>
          <SelectField
            key="document_type"
            styles={styles}
            label="document_type"
            value={document_type ? document_type : ""}
            onChange={this.props.onInput}
            docTypes={document_types}
          />
          <StringField
            key="supplier_country_code"
            styles={styles}
            label="supplier_country_code"
            value={country_code ? country_code : ""}
            onChange={this.props.onInput}
            onBlur={this.props.onBlur}
            placeholder="Format (alpha 2 country code eg.: DK)"
            errorText={this.props.errormsgs["supplier_country_code"]}
          />
          {this.renderTextFields()}
          <Button type="submit" fullWidth variant="contained" color="primary">
            Annotate document
          </Button>
        </form>
      </Paper>
    );
  }
}

export default RightPane;
