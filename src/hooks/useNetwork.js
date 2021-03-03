import { useState } from 'react';

const useNetwork = () => {
  const [state, setState] = useState({ data: [] });

  return [state, setState];
};

export default useNetwork;
