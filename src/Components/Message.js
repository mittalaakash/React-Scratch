import React, { Component } from 'react';

class Message extends Component {
  state = {
    message: 'Welcome Visitor!!',
  };

  changeMessage() {
    this.setState({ message: 'thanks' });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button
          onClick={() => {
            this.changeMessage();
          }}
        >
          clicke me!!
        </button>
      </div>
    );
  }
}

export default Message;
