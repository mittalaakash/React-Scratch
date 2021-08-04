import React from 'react';

const names = ['Bruce', 'Clark', 'Diana'];

function NameList() {
  return (
    <div>
      {names.map(name => (
        <h1>{name}</h1>
      ))}
    </div>
  );
}

export default NameList;
