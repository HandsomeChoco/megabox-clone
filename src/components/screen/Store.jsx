import React from 'react';

function Store() {
  console.log('Store')
  return <div>스토어</div>;
}

export default React.memo(Store);
