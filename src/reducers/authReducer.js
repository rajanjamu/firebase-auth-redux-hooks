const initialState = { user: {} };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.user };
    case 'LOGOUT':
      return { user: {} };
    default:
      return state;
  }
};

export default authReducer;
