import React from 'react';

function Home() {
  console.log('Home');
  return <div style={{ color: 'white' }}>홈</div>;
}

export default React.memo(Home);
