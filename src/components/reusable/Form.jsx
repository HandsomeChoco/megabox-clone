import React, { useState } from 'react';

const Form = ({ children }) => {
  const [state, setState] = useState({});
  console.log(children[0]);
  return <form>{children}</form>;
};

export default Form;
