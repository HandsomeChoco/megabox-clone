import React, { useEffect, useState } from 'react';

const Form = ({ children }) => {
  const [state, setState] = useState();
  console.log(children.map(v => v.props));
  return <form>{children}</form>;
};

export default Form;
