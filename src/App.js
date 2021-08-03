import React, { Component } from 'react';
import './App.css';
import Counter from './Components/Counter';
import EventBind from './Components/EvenBind';
import FunctionClick from './Components/FunctionClick';
import Greet from './Components/Greet';
import Message from './Components/Message';
import ParentComponent from './Components/ParentComponent';
import Welcome from './Components/Welcome';

class App extends Component {
  state = {};
  render() {
    return (
      <div className='App'>
        <ParentComponent />
        {/* <EventBind /> */}
        {/* <FunctionClick /> */}
        {/* <Greet name='Clark' /> */}
        {/* <Welcome name='Diana' /> */}
        {/* <Message /> */}
        {/* <Counter /> */}
      </div>
    );
  }
}

export default App;
