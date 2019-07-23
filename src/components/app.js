import React from "react";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import MainContent from "./layouts/mainContent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      values: {}
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
    values[name] = value;
    this.setState({ values: values });
  };

  handleDateInput = (date, field) => {
    const values = { ...this.state.values };
    values[field] = date;
    this.setState({ values: values });
  };

  render() {
    const apiResponse = [
      {
        imgUri:
          "https://github.com/e-conomic/ssn-distributable/blob/master/photos/1bffaa1c581fe8780f2177d0e3b1742c-image.jpg?raw=true"
      },
      {
        imgUri:
          "https://github.com/e-conomic/ssn-distributable/blob/master/photos/4092d1e58b4134a8effcc746e47e5221-image.png?raw=true"
      }
    ];
    return (
      <React.Fragment>
        <Header />
        <MainContent
          input={apiResponse[this.state.step]}
          onSubmit={this.handleSubmit}
          onInput={this.handleInput}
          values={this.state.values}
          onDateInput={this.handleDateInput}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
