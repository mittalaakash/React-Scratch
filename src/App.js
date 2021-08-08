import React, { Component } from 'react';
import './App.css';
import ClickCounterTwo from './Components/ClickCounterTwo';
import HoverCounterTwo from './Components/HoverCounterTwo';
import Counter from './Components/Counter';
import User from './Components/User';
import ComponentC from './Components/ComponentC';
import { UserProvider } from './Components/userContext';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <UserProvider value='Aakash'>
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}

export default App;
