import React, { Component } from 'react';

export class Counter extends Component {
  state = {
    count: 0,
  };

  increment() {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }
  incre() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        count {this.state.count}
        <br />
        <button
          onClick={() => {
            this.incre();
            console.log(this.state.count);
          }}
        >
          Incementer
        </button>
      </div>
    );
  }
}

export default Counter;
