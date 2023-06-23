import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // 0. ==================Using Short Circuit operator===================================
    // this.state.isLoggedIn && <div>Welcome Mayank</div>
    // 1. =============================Using Terniary Operator ===========================
    return this.state.isLoggedIn ? (
      <div>Welcome Mayank</div>
    ) : (
      <div>Welcome Guest</div>
    );
    //  2.  =======================Using Element Variable ==========================
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Mayank</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;
    //3.    =========================Using else if condition =========================
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Mayank</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    //   ========================================================
    // return (
    //   <div>
    //     <div>Welcome Mayank</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
