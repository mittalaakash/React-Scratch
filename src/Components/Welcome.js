import React from 'react';
class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <i>{this.props.children}</i>
      </div>
    );
  }
}

export default Welcome;
