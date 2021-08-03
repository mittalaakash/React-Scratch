import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  state = {
    parentName: 'Parent',
  };

  greetParent = para => {
    alert(`Hello ${this.state.parentName} ${para}`);
  };
  render() {
    return (
      <div>
        <ChildComponent greetParent={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
