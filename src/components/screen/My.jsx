import React from 'react';

function My() {
  console.log('My')
  return <div>My</div>;
}

export default React.memo(My);
