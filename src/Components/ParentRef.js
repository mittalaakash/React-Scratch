import React, { Component } from 'react';
import Input from './InputRef';

class ParentRef extends Component {
  componenetRef = React.createRef();

  clickHandler = () => {
    this.componenetRef.current.focusInput();
  };
  render() {
    return (
      <div>
        <Input ref={this.componenetRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default ParentRef;
