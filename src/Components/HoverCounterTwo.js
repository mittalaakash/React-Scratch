import React, { Component } from 'react';

class HoverCounterTwo extends Component {
  render() {
    const { count, increment } = this.props;
    return <h2 onMouseOver={increment}>Hovered {count} times</h2>;
  }
}

export default HoverCounterTwo;
