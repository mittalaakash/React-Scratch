import React, { Component } from 'react';
import withCounter from './withCounter';

export class HoverCounter extends Component {
  render() {
    const { count, incrementer } = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementer}>Counter is {count}</h1>
      </div>
    );
  }
}

export default withCounter(HoverCounter, 10);
