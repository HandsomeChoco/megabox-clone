import React, { useEffect, useState } from 'react';

const Form = ({ children, onSubmit, actionUrl }) => {
  return <form onSubmit={onSubmit} action={actionUrl}>{children}</form>;
};

export default Form;
