import React from 'react';

const Title = () => {
    console.log(`Rendering Title`)
  return <div>Use Call Back Hook</div>;
};

export default React.memo(Title);
