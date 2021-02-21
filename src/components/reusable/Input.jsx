import React from 'react';

const Input = ({ ...rest }) => <input {...rest} />;
export default React.memo(Input);
