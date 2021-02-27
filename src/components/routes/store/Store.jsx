import React from 'react';
import Div from '../../reusable/Div';
// this component is not a Redux store!

const Store = () => {
  console.log('Store');
  return (
    <div style={{ color: 'white' }}>
      스토어
      <Div
        className="test"
        flex={true}
        flow="column"
        justifyContent="center"
        alignItems="flexEnd"
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </Div>
    </div>
  );
};

export default React.memo(Store);
