import React from 'react';

const Div = ({
  children,
  className,
  flex = false,
  flow = 'row',
  justifyContent = 'none',
  alignItems = 'flexStart',
}) => {
  const style = {
    display: flex ? 'flex' : 'block',
    flexFlow: flow === 'column' ? 'column nowrap' : 'row nowrap',
    justifyContent: justifyContent,
    alignItems: alignItems,
  };
  console.log(justifyContent);
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default React.memo(Div);
