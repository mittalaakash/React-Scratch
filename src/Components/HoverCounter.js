import React, { Component } from 'react';

export class HoverCounter extends Component {
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
        <h1 onMouseOver={this.clickHandler}>Counter is {this.state.count}</h1>
      </div>
    );
  }
}

export default HoverCounter;
