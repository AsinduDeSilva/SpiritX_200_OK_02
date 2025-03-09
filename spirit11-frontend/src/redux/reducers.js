const initialState = {
    loggedUser: {
      id: null,
      role: null,
      isLogged: false,
      username: null,
      password: null
    }
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LOGGED_USER':
        return {
          ...state,
          loggedUser: {
            id: action.payload.id,
            role: action.payload.role,
            isLogged: action.payload.isLogged,
            username: action.payload.username,
            password: action.payload.password
          }
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;