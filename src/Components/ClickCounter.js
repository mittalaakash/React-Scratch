import React, { Component } from 'react';

export class ClickCounter extends Component {
  state = {
    count: 0,
  };
  clickHandler = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>
          Counter is {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClickCounter;
