import React from 'react';
import "../App.css";

const Container = ({ children }) => {
  console.log('container')
  return <div className="container">{children}</div>;
};

export default React.memo(Container);
