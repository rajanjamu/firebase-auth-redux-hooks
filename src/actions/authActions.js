import { auth, googleAuthProvider } from '../vendors/firebase';

export const loginSync = (user) => ({
  type: 'LOGIN',
  user,
});

export const login = () => {
  return () => {
    return auth.signInWithPopup(googleAuthProvider);
  };
};

export const logoutSync = () => ({
  type: 'LOGOUT',
});

export const logout = () => {
  return () => {
    return auth.signOut();
  };
};

export const isAuth = () => ({
  
})
