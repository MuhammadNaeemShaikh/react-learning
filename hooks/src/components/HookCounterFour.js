import React, { useState } from 'react';

const HookCounterFour = () => {
  const [item, setItem] = useState([]);

  const addItem = () => {
    setItem([
      ...item,
      {
        id: item.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div>
      <button onClick={addItem}>Add A Number</button>
      <ul>{item.map((val) => val.value)}</ul>
    </div>
  );
};

export default HookCounterFour;
