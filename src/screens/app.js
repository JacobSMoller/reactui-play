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
      step: 0,
      values: { document_type: "" },
      errormsgs: {},
      QueryLimit: 0,
      QueryCountry: "",
      apiResponse: []
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    let step = this.state.step;
    step++;
    this.setState({ values: {}, step: step });
    console.log(this.state);
  };

  handleInput = event => {
    const { value } = event.target;
    const { name } = event.target;
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
    console.log(this.state);

    // TODO call flask api that handles storage and bigquery.
    this.setState({
      apiResponse: [
        {
          imgUri:
            "https://github.com/e-conomic/ssn-distributable/blob/master/photos/1bffaa1c581fe8780f2177d0e3b1742c-image.jpg?raw=true"
        },
        {
          imgUri:
            "https://github.com/e-conomic/ssn-distributable/blob/master/photos/4092d1e58b4134a8effcc746e47e5221-image.png?raw=true"
        }
      ]
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
    if (this.state.apiResponse.length === 0) {
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
            <LeftPane
              styles={styles}
              imgUri={this.state.apiResponse[this.state.step]["imgUri"]}
            />
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
