import React, { Component } from 'react';
import './App.css';
import PostList from './HTTP Components/PostList';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <PostList />
      </div>
    );
  }
}

export default App;
