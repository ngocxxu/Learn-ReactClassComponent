import React, { Component } from "react";

class AddComponent extends Component {
  state = { title: "", salary: "" };

  handleChangeJobTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleChangeSalaryJob = (e) => {
    this.setState({
      salary: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log("this.state", this.state);

    if (!this.state.title || !this.state.salary) {
      alert("Please enter...");
      return;
    }

    this.props.updateArrJob({
      id: Math.floor(Math.random() * 100),
      title: this.state.title,
      salary: this.state.salary,
    });

    this.setState({
      title: "",
      salary: "",
    });
  };

  render() {
    return (
      <>
        <form>
          <label htmlFor="jobTitle">jobTitle: </label>
          <br />
          <input
            onChange={(e) => this.handleChangeJobTitle(e)}
            type="text"
            value={this.state.title}
          />
          <br />
          <label htmlFor="salaryJob">salaryJob: </label>
          <br />
          <input
            onChange={(e) => this.handleChangeSalaryJob(e)}
            type="text"
            value={this.state.salary}
          />
          <br />
          <input
            onClick={(e) => this.handleSubmit(e)}
            type="button"
            value="Submit"
          />
        </form>
      </>
    );
  }
}

export default AddComponent;
