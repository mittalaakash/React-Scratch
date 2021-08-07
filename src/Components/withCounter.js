import React from 'react';

const withCounter = (WrappedComponent, incrementer = 1) => {
  class WithCounter extends React.Component {
    state = {
      count: 0,
    };
    incrementer = () => {
      this.setState(prevState => ({
        count: prevState.count + incrementer,
      }));
    };
    render() {
      return (
        <WrappedComponent
          incrementer={this.incrementer}
          count={this.state.count}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
