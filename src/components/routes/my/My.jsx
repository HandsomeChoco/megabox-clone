import React from 'react';

const My = () => {
  console.log('My');
  return <div style={{ color: 'white' }}>My</div>;
};

export default React.memo(My);
