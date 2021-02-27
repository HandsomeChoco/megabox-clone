import React from 'react';
// this component is not a Redux store!

const Store = () => {
  console.log('Store');
  return <div style={{ color: 'white' }}>스토어</div>;
};

export default React.memo(Store);
