import React from 'react';

const FlexBox = ({
  children,
  className,
  flex = false,
  flow = 'row',
  justifyContent = 'flex-start',
  alignItems = 'center',
  ...rest
}) => {

  const style = {
    display: flex ? 'flex' : 'block',
    flexFlow: flow === 'column' ? 'column nowrap' : 'row nowrap',
    justifyContent: justifyContent,
    alignItems: alignItems,
  };
  
  return (
    <div
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
};

export default React.memo(FlexBox);
