import React from 'react';

function Booking() {
  console.log('Booking');
  return <div style={{ color: 'white' }}>예매</div>;
}

export default React.memo(Booking);
