const initialState = { user: {}, isAuth: false };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.user, isAuth: true };
    case 'LOGOUT':
      return { user: {}, isAuth: false };
    default:
      return state;
  }
};

export default authReducer;
