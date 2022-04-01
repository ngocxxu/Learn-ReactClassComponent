import React, { Component } from "react";

class ChildComponent extends Component {
  state = { isShown: true };

  render() {
    let { name, age, arrayJobs } = this.props;

    return (
      <>
        <p>FirstNameChild: {name}</p>
        <h3>List of jobs</h3>
        {/* <button onClick={() => this.setState({ isShown: true })}>Show</button>
        <button onClick={() => this.setState({ isShown: false })}>Hide</button> */}
        {this.state.isShown ? (
          <>
            {arrayJobs?.map((item, index) => {
              return (
                <>
                  <div key={item.id}>
                    Title jobs: {item.title} & Salary: {item.salary}
                    <button onClick={() => this.props.deleteJob(item.id)}>
                      Delete
                    </button>
                  </div>
                </>
              );
            })}
            <button
              onClick={() => this.setState({ isShown: !this.state.isShown })}
            >
              Hide
            </button>
          </>
        ) : (
          <button
            onClick={() => this.setState({ isShown: !this.state.isShown })}
          >
            Show
          </button>
        )}
      </>
    );
  }
}

// const ChildComponent = (props) => {
//   let { name, age, arrayJobs } = props;

//   return (
//     <div>
//       <p>FirstNameChild: {name}</p>
//       <h3>List of jobs</h3>
//       {arrayJobs?.map((item, index) => {
//         return (
//           <>
//             {item.salary > 400 ? (
//               <div key={item.id}>
//                 Title jobs: {item.title} & Salary: {item.salary}
//               </div>
//             ) : (
//               ""
//             )}
//           </>
//         );
//       })}
//     </div>
//   );
// };

export default ChildComponent;
