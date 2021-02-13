const reducer = (state, action) => {
    switch(action.type) {
      case 'SET_SCREEN' : return {
          ...state, screen: action.screen
      }
      
      default : throw new Error(`Unhandled action type: ${action.type}`)
    }
}


export default reducer;
  