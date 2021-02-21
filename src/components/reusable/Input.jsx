import React from 'react';

const Input = ({ _ref, ...rest }) => <input {...rest} ref={_ref}/>;
export default React.memo(Input);
