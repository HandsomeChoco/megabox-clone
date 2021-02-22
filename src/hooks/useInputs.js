import { useCallback, useState } from 'react';

const useInputs = initState => {
  const [inputState, setInputState] = useState(initState);

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputState(state => ({ ...state, [name]: value }));
  }, []);

  const onToggle = useCallback(e => {
    const { name, checked } = e.target;
    setInputState(state => ({ ...state, [name]: checked }));
  }, []);

  return [inputState, onChange, onToggle];
};

export default useInputs;
