import React from "react";

class MyComponent extends React.Component {

  state = {
    name: 'bono',
    age: '25'
  }

  handleClick = (myName) => {
    alert(myName);
  }

  handleChange = (e) => {
    // hàm setState() sẽ tự động gọi hàm render()
    this.setState({
      name: e.target.value,
    })
  }

  render() {
    let myName = 'kimthoa';

    return <>
      <div>{this.state.name}</div>
      <input value={this.state.name} onChange={(e)=> this.handleChange(e)}/>
      <div>
        <button onClick={() => this.handleClick(myName)}>Click Me!</button>
      </div>
    </>
  }
}

export default MyComponent;
