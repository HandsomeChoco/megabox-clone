import React from 'react';

function My() {
  console.log('My');
  return <div style={{ color: 'white' }}>My</div>;
}

export default React.memo(My);
