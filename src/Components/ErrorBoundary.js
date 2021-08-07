import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>something went wrong</h1>;
    }
    return <div>{this.props.children}</div>;
  }
}

export default ErrorBoundary;
