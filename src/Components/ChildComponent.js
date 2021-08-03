import React from 'react';

function ChildComponent({ greetParent }) {
  return (
    <div>
      <button onClick={() => greetParent('hello')}>Greet Parent</button>
      <button onClick={greetParent.bind(this, 'hello')}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
