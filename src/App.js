import React, { Component } from 'react';
import './App.css';
import ErrorBoundary from './Components/ErrorBoundary';
import Hero from './Components/Hero';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ErrorBoundary>
          <Hero heroName='Batman' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='SuperMan' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='IronMan' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='Joker' />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
