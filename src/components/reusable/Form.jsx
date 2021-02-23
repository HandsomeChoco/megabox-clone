import React from 'react';

const Form = ({ children, onSubmit, actionUrl, ...rest }) => {
  return (
    <form onSubmit={onSubmit} action={actionUrl} {...rest}>
      {children}
    </form>
  );
};

export default React.memo(Form);
