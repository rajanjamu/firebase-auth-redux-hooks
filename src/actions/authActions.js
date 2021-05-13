import { auth, googleAuthProvider } from '../vendors/firebase';

export const loginSync = (uid) => ({
  type: 'LOGIN',
  uid,
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
