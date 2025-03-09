export const setLoggedUser = (id, role, isLogged, username, password) => {
    return {
      type: 'SET_LOGGED_USER',
      payload: { id, role, isLogged, username, password }
    };
  };