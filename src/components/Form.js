import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      address: "",
      topic: "react",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleAddressChange = (event) => {
    this.setState({
      address: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.address} ${this.state.topic}`);
    event.preventDefault();
  };

  render() {
    // ===========or
    const { username, address, topic } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            value={username}
            onChange={this.handleUsernameChange}
          />
          <div>
            <label>Address</label>
            <textarea
              type="text"
              value={address}
              onChange={this.handleAddressChange}
            />
          </div>
          <div>
            <label>Topic</label>
            <select value={topic} onChange={this.handleTopicChange}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
