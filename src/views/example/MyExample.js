import React, { Component } from "react";

export default class MyExample extends Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleChangeFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  handleChangeLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  handleClick = () => {
    console.log(this.state);
  }

  render() {
    return (
      <>
        ---------------------------
        <form>
          <label htmlFor="FName">FName: </label>
          <br />
          <input
            onChange={(e) => this.handleChangeFirstName(e)}
            type="text"
            value={this.state.firstName}
          />
          <br />
          <label htmlFor="LName">LName: </label>
          <br />
          <input
            onChange={(e) => this.handleChangeLastName(e)}
            type="text"
            value={this.state.lastName}
          />
          <br />
          <input onClick={()=> this.handleClick()} type="button" value="Submit" />
        </form>
      </>
    );
  }
}
