import { useState } from "react";

export const initAppState = {
    current: 'home'
}

function useAppState(initState) {
    const [state, setState] = useState(initState);
    return [state, setState];
}

export default useAppState;