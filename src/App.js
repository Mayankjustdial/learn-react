import React, { Component } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

export class App extends Component {
  render() {
    return (
      <div>
        {/* <PostList /> */}
        <PostForm />
      </div>
    );
  }
}

export default App;
