import { useReducer } from 'react';
import { networkReducer } from './reducer/reducer';

const useNetwork = () => {
  const [state, dispatch] = useReducer(networkReducer, { data: [] });

  return [state, dispatch];
};

export default useNetwork;
