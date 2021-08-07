import React, { Component } from 'react';
import withCounter from './withCounter';

export class ClickCounter extends Component {
  render() {
    const { count, incrementer } = this.props;
    return (
      <div>
        <button onClick={incrementer}>
          {this.props.name} Counter is {count}
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 5);
