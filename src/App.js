import React, { Component } from 'react';
import './App.css';
import ClickCounterTwo from './Components/ClickCounterTwo';
import HoverCounterTwo from './Components/HoverCounterTwo';
import Counter from './Components/Counter';
import User from './Components/User';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Counter
          render={(count, increment) => (
            <HoverCounterTwo count={count} increment={increment} />
          )}
        />
        <Counter
          render={(count, increment) => (
            <ClickCounterTwo count={count} increment={increment}>
              <button>Clicked {count} times</button>
            </ClickCounterTwo>
          )}
        />
      </div>
    );
  }
}

export default App;
