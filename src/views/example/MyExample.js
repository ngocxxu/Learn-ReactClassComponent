import React, { Component } from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";

export default class MyExample extends Component {
  state = {
    arrJobs: [
      { id: 1, title: "developer", salary: "500" },
      { id: 2, title: "tester", salary: "400" },
      { id: 3, title: "designer", salary: "300" },
    ],
  };

  handleClick = () => {
  };

  updateArrJob = (job) => {
    console.log('job',job);

    // dấu ... dùng để copy các phần tử trong mảng arJobs
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });

  };

  deleteJob = (id) => {

    this.setState({
      arrJobs: [...this.state.arrJobs.filter((item)=> item.id !== id)]
    })
  }

  render() {
    return (
      <>
        <AddComponent updateArrJob={this.updateArrJob} />
        <ChildComponent deleteJob={this.deleteJob} arrayJobs={this.state.arrJobs} />
        {/* <ChildComponent name={'childTwo'}/>
        <ChildComponent name={'childThree'}/> */}
      </>
    );
  }
}
