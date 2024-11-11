import React, { useEffect, useState } from 'react';

const UseEffectOne = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  //   useEffect(() => {
  //     console.log('clicked');
  //     document.title = `Clicked ${count} times`;
  //   }); // component did update

  //run useEffect when count update
  //   useEffect(() => {
  //     console.log('clicked');
  //     document.title = `Clicked ${count} times`;
  //   }, [count]);

  //   useEffect(() => {}, []); // component did mount

//   useEffect(() => {
//     return () => {
//       //component will unmount
//       console.log('component will unmount');
//     };
//   });

  return (
    <div>
      UseEffectOne
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseEffectOne;
