import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import StringField from "../stringField";
import SelectField from "../selectField";
import ReceiptForm from "../receiptForm";
import InvoiceForm from "../invoiceForm";
import SkipButton from "../skipButton";
import CloudUploadIcon from "@material-ui/icons/CloudUploadOutlined";
import CircularProgress from "@material-ui/core/CircularProgress";

const document_types = ["Receipt", "Invoice"];

class RightPane extends React.Component {
  renderTextFields() {
    const document_type = this.props.values.document_type;
    const country_code = this.props.values.supplier_country_code;
    switch (document_type) {
      case "Receipt":
        return (
          <React.Fragment>
            <StringField
              key="supplier_country_code"
              styles={this.props.styles}
              label="supplier_country_code"
              value={country_code ? country_code : ""}
              onChange={this.props.onChange}
              onBlur={this.props.onBlur}
              placeholder="Format (alpha 2 country code eg.: DK)"
              errorText={this.props.errormsgs.supplier_country_code}
              required={true}
            />
            <ReceiptForm
              values={this.props.values}
              errormsgs={this.props.errormsgs}
              onChange={this.props.onChange}
              onBlur={this.props.onBlur}
              onDateInput={this.props.onDateInput}
              onMissing={this.props.onMissing}
              styles={this.props.styles}
            />
          </React.Fragment>
        );
      case "Invoice":
        return (
          <React.Fragment>
            <StringField
              key="supplier_country_code"
              styles={this.props.styles}
              label="supplier_country_code"
              value={country_code ? country_code : ""}
              onChange={this.props.onChange}
              onBlur={this.props.onBlur}
              placeholder="Format (alpha 2 country code eg.: DK)"
              errorText={this.props.errormsgs.supplier_country_code}
              required={true}
            />
            <InvoiceForm
              values={this.props.values}
              errormsgs={this.props.errormsgs}
              onChange={this.props.onChange}
              onBlur={this.props.onBlur}
              onDateInput={this.props.onDateInput}
              onMissing={this.props.onMissing}
              styles={this.props.styles}
            />
          </React.Fragment>
        );
      default:
        return (
          <StringField
            key="supplier_country_code"
            styles={this.props.styles}
            label="supplier_country_code"
            value={country_code ? country_code : ""}
            onChange={this.props.onChange}
            onBlur={this.props.onBlur}
            placeholder="Format (alpha 2 country code eg.: DK)"
            errorText={this.props.errormsgs.supplier_country_code}
            required={true}
          />
        );
    }
  }

  render() {
    const document_type = this.props.values.document_type;
    return (
      <Paper style={this.props.styles.Paper}>
        <form onSubmit={this.props.onSubmit}>
          <SelectField
            key="document_type"
            styles={this.props.styles}
            label="document_type"
            value={document_type ? document_type : ""}
            onChange={this.props.onChange}
            docTypes={document_types}
          />
          {this.renderTextFields()}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={this.props.loading}
          >
            {this.props.loading && (
              <CircularProgress color="inherit" size={20} />
            )}
            Annotate document
            <CloudUploadIcon style={{ marginLeft: 5 }} />
          </Button>
        </form>
        <SkipButton onSkip={this.props.onSkip} loading={this.props.loading} />
      </Paper>
    );
  }
}

export default RightPane;
