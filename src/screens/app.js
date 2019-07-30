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
import QueryForm from "../components/layouts/queryForm";
import { format, isValid as dateIsValid } from "date-fns";
import axios from "axios";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: { document_type: "" },
      errormsgs: {},
      queryLimit: 0,
      queryCountry: "",
      queried: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    // Send values to put endpoint.
  };

  handleInput = event => {
    const { value } = event.target;
    const { name } = event.target;
    console.log(name);
    const values = { ...this.state.values };
    const errormsgs = { ...this.state.errormsgs };
    values[name] = value;
    const valid = validate(values);
    if (valid) {
      errormsgs[name] = "";
    }
    this.setState({ values: values, errormsgs: errormsgs });
  };

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

  handleDateInput = (date, field) => {
    if (dateIsValid(date)) {
      const values = { ...this.state.values };
      values[field] = format(date, "yyyy/MM/dd");
      this.setState({ values: values });
    }
  };

  handleQuerySubmit = event => {
    event.preventDefault();
    axios
      .post("https://60c29fbf.ngrok.io/get/document", {
        country_code: this.state.queryCountry
      })
      .then(res => {
        console.log(res.data.img_url);
        this.setState({
          queried: true,
          imgUrl: res.data.img_url
        });
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  handleQueryInput = event => {
    const { value } = event.target;
    const { name } = event.target;
    const currentState = { ...this.state };
    currentState[name] = value;
    this.setState(currentState);
  };

  render() {
    if (!this.state.queried) {
      return (
        <React.Fragment>
          <Header />
          <QueryForm
            onSubmit={this.handleQuerySubmit}
            onInput={this.handleQueryInput}
          />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Header />
        <Grid container spacing={2}>
          <Grid item sm={8}>
            <LeftPane styles={styles} imgUri={this.state.imgUrl} />
          </Grid>
          <Grid item sm>
            <RightPane
              styles={styles}
              values={this.state.values}
              errormsgs={this.state.errormsgs}
              onSubmit={this.handleSubmit}
              onInput={this.handleInput}
              onDateInput={this.handleDateInput}
              onBlur={this.handleBlur}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
