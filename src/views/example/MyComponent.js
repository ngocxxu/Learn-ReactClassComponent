import React from "react";

class MyComponent extends React.Component {

  state = {
    name: 'bono',
    age: '25'
  }

  render() {
    return <div>{this.state.name}</div>;
  }
}

export default MyComponent;
