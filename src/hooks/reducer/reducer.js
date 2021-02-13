const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SCREEN':
      return {
        ...state,
        screen: action.screen,
      };
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        isSideBarHidden: !state.isSideBarHidden,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default reducer;
