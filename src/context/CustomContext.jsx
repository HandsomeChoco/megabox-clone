import React, { createContext, useContext } from 'react';
import useNetwork from '../hooks/useNetwork';

const CustomStateContext = createContext();
const CustomDispatchDispatch = createContext();

const CustomContext = ({ children }) => {
  const [state, dispatch] = useNetwork();

  return (
    <CustomStateContext.Provider value={state}>
      <CustomDispatchDispatch.Provider value={dispatch}>
        {children}
      </CustomDispatchDispatch.Provider>
    </CustomStateContext.Provider>
  );
};

export const useCustomContextState = () => {
  const state = useContext(CustomStateContext);
  if (!state) {
    throw new Error('Cannot find Provider Component!');
  }
  return state;
};

export const useCustomContextDispatch = () => {
  const dispatch = useContext(CustomDispatchDispatch);
  if (!dispatch) {
    throw new Error('Cannot find Provider Component!');
  }
  return dispatch;
};

export default React.memo(CustomContext);
