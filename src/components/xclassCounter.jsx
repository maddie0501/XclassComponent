import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };   // all are component mount
  }

  increment = () => {
    this.setState({ count: this.state.count + this.props.diff });  // k-V pairs   , setstate are component update
  };

  decrement = () => {
    this.setState((currState, currProps) => {
      return { count: currState.count - currProps.diff };
    });
    };
    

  render() {   // both mount and updates 
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment{this.props.diff}</button>
        <button onClick={this.decrement}>Decrement{this.props.diff}</button>
      </div>
    );
  }
}

export default Counter;
