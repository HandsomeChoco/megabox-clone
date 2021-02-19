const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        isSideBarHidden: !state.isSideBarHidden,
      };
    case 'TOGGLE_LOGIN_WINDOW':
      return {
        ...state,
        isLoginWindowHidden: !state.isLoginWindowHidden,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default reducer;
