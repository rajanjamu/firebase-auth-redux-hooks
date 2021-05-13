import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../actions/authActions';

export default function Login() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login with Google</button>
      )}
    </div>
  );
}
