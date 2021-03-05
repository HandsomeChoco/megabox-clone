import React, { useContext, useReducer } from 'react';
import reducer from '../hooks/reducer/reducer';

const AppStateContext = React.createContext();
const AppDispatchContext = React.createContext();

const initialState = {
  isSideBarHidden: true,
  isLoginWindowHidden: true,
  topNaviLogo: '',
};

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export const useAppStateContext = () => {
  const state = useContext(AppStateContext);
  if (!state) {
    throw new Error('Cannot find AppStateContext');
  }
  return state;
};

export const useAppDispatchContext = () => {
  const state = useContext(AppDispatchContext);
  if (!state) {
    throw new Error('Cannot find AppDispatchContext');
  }
  return state;
};

export default React.memo(AppContext);
