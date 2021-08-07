import React from 'react';

const withCounter = WrappedComponent => {
  class WithCounter extends React.Component {
    state = {
      count: 0,
    };
    incrementer = () => {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
    };
    render() {
      return (
        <WrappedComponent
          incrementer={this.incrementer}
          count={this.state.count}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
