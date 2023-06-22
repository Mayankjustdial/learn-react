import React, { Component } from "react";

class WelcomeClass extends Component {
  render() {
    const { name, heroName } = this.props;
    // const { state1, state2 } = tihs.state;
    return (
      <p>
        Welcome {name} from classs component {heroName}
      </p>
    );
  }
}

export default WelcomeClass;
