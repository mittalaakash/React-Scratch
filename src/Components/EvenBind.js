import React, { Component } from 'react';

class EventBind extends Component {
  state = {
    message: 'hello',
  };

  clickHandler() {
    this.setState({ message: 'thanks' });
    console.log(this.state.message);
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    );
  }
}

export default EventBind;
