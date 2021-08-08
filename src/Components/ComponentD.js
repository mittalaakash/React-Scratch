import React, { Component } from 'react';
import ComponentE from './ComponentE';
import UserContext from './userContext';

export class ComponentD extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
        <h1>Component D contexts {this.context}</h1>
        <ComponentE />
      </div>
    );
  }
}

export default ComponentD;
