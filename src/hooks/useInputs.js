import React, { useCallback, useState } from "react"

const useInputs = (initState) => {
    const [inputState, setInputState] = useState(initState);
    
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setInputState({ ...inputState, [name]: value });
    }, []);

    return  [inputState, onChange];
}

export default useInputs;