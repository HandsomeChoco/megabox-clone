import React, { useContext } from 'react';
import appState, { initAppState } from '../hooks/useAppState';
const AppStateContext = React.createContext();
const AppDispatchContext = React.createContext();

const AppContext = ({ children }) => {
    return (
        <AppStateContext.Provider value={appState(initAppState)}>
            <AppDispatchContext.Provider value={null}>
                {children}
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
    )
}

export const useAppStateContext = () => {
    const state = useContext(AppStateContext);
    if(!state) {
        throw new Error('Cannot find AppStateContext');
    }
    return state;
}

export const useAppDispatchContext = () => {
    const state = useContext(AppDispatchContext);
    if(!state) {
        throw new Error('Cannot find AppDispatchContext')
    }
    return state;
}

export default AppContext;