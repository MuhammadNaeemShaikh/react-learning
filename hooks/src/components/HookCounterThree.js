import React, { useState } from 'react';

const HookCounterThree = () => {
  const [name, setName] = useState({ firstName: '', lastName: '' });

  return (
    <div>
      <input
        type="text"
        name="firstName"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        name="lastName"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <p>firstName{name.firstName}</p>
      <p>lastName{name.lastName}</p>
    </div>
  );
};

export default HookCounterThree;
