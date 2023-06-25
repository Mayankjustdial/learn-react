import React, { Component } from "react";

class ClassCounterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    document.title = `Clicked ${this.state.count} times`;
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.increment()}>
          Count : {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;
