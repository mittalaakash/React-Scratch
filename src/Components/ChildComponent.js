import React from 'react';

function ChildComponent(props) {
  console.log(props);
  return (
    <div>
      <button onClick={() => props.greetParent('hello')}>Greet Parent</button>
      <button onClick={props.greetParent.bind(this, 'hello')}>
        Greet Parent
      </button>
    </div>
  );
}

export default ChildComponent;
