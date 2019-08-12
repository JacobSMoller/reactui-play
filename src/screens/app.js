import React from "react";
import Header from "../components/layouts/header";
import {
  validateField,
  validate,
  fieldErrorMsgs
} from "../validation/validate";
import Grid from "@material-ui/core/Grid";
import LeftPane from "../components/layouts/leftPane";
import RightPane from "../components/layouts/rightPane";
import QueryForm from "../components/queryForm";
import { format, isValid as dateIsValid } from "date-fns";
import axios from "axios";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    overflow: "auto",
    maxHeight: "895px"
  },
  LeftPaper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    overflow: "auto",
    maxHeight: "895px"
  },
  InputField: {
    padding: 2,
    width: "49%"
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
      errormsgs: {},
      queryCountry: "",
      queried: false,
      loading: false,
      numPages: 0,
      currentPdfPage: 1,
      documentsEndpoint: "https://e05ce235.ngrok.io/documents"
    };
  }
  // Used by the submit form button in rightpane.
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });
    axios
      .post(this.state.documentsEndpoint, {
        values: { ...this.state.values },
        img_metadata: this.state.imgMetadata
      })
      .then(res => {
        this.setState({
          values: {},
          errormsgs: {}
        });
        // Get new document TODO get calls should be in a helper function
        axios
          .get(this.state.documentsEndpoint + "/" + this.state.queryCountry)
          .then(res => {
            this.setState({
              imgMetadata: res.data.img_metadata,
              values: res.data.values,
              loading: false
            });
          })
          .catch(error => {
            console.log(error.response);
          });
      })
      .catch(error => {
        if (error.response.status === 400) {
          this.setState({
            loading: false,
            errormsgs: error.response.data.err_msgs
          });
        } else {
          console.log(error);
        }
      });
  };

  // Used by the skip button in rightpane.
  handleSkip = () => {
    this.setState({
      values: {},
      errormsgs: {},
      loading: true
    });
    axios
      .get(this.state.documentsEndpoint + "/" + this.state.queryCountry)
      .then(res => {
        this.setState({
          imgMetadata: res.data.img_metadata,
          values: res.data.values,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  // Used on input fields to set state
  handleFieldInput = event => {
    const { value } = event.target;
    const { name } = event.target;
    const values = { ...this.state.values };
    const errormsgs = { ...this.state.errormsgs };
    values[name] = value === "" ? undefined : value;
    const valid = validate(values);
    if (valid) {
      errormsgs[name] = "";
    }
    this.setState({ values: values, errormsgs: errormsgs });
  };

  // Used on rightpane input fields to validate content when blurred.
  handleBlur = event => {
    const { name } = event.target;
    const valid = validateField(this.state.values[name], name);
    let errormsgs = { ...this.state.errormsgs };

    if (!valid) {
      errormsgs[name] = fieldErrorMsgs(name)
        ? name + " " + fieldErrorMsgs(name)
        : "Bad input for field " + name;
    } else {
      delete errormsgs[name];
    }

    this.setState({ errormsgs: errormsgs });
  };

  // Used on date selectors to correctly set date in state.
  handleDateInput = (date, field) => {
    if (dateIsValid(date)) {
      const values = { ...this.state.values };
      values[field] = format(date, "yyyy/MM/dd");
      this.setState({ values: values });
    }
  };

  // Used on first view to select a country to annotate documents for.
  handleQuerySubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });
    axios
      .get(this.state.documentsEndpoint + "/" + this.state.queryCountry)
      .then(res => {
        this.setState({
          queried: true,
          imgMetadata: res.data.img_metadata,
          values: res.data.values,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  // Used on select country field to set state.
  handleQueryInput = event => {
    const { value } = event.target;
    const { name } = event.target;
    const currentState = { ...this.state };
    currentState[name] = value;
    this.setState(currentState);
  };

  // Used by react pdf to set number of pages on successfully loading the pdf.
  handleLoadPdf = ({ numPages }) => {
    this.setState({ numPages: numPages, currentPdfPage: 1 });
  };

  // Used to change between first and last page of pdf.
  handleChangePage = () => {
    const newCurrentPage =
      this.state.currentPdfPage !== 1 ? 1 : this.state.numPages;
    this.setState({ currentPdfPage: newCurrentPage });
  };

  handleMissing = name => {
    const currentValues = { ...this.state.values };
    currentValues[name] = null;
    this.setState({ values: currentValues });
  };

  render() {
    if (!this.state.queried) {
      return (
        <React.Fragment>
          <Header />
          <QueryForm
            onSubmit={this.handleQuerySubmit}
            onInput={this.handleQueryInput}
            loading={this.state.loading}
          />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Header />
        <Grid container spacing={2}>
          <Grid item sm={8}>
            <LeftPane
              styles={styles}
              imgBytes={this.state.imgMetadata.content}
              imgFormat={this.state.imgMetadata.format}
              onLoadPdf={this.handleLoadPdf}
              numPages={this.state.numPages}
              currentPage={this.state.currentPdfPage}
              OnChangePage={this.handleChangePage}
            />
          </Grid>
          <Grid item sm>
            <RightPane
              styles={styles}
              values={this.state.values}
              errormsgs={this.state.errormsgs}
              onSubmit={this.handleSubmit}
              onChange={this.handleFieldInput}
              onDateInput={this.handleDateInput}
              onBlur={this.handleBlur}
              onSkip={this.handleSkip}
              onMissing={this.handleMissing}
              loading={this.state.loading}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
