export const networkReducer = (state, action) => {
  switch (action.type) {
    case 'GET':
      return {
        ...state,
        data: state.data.concat(action.response.data.results),
      };
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
};

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
