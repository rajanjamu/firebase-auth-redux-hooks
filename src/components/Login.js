import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Login() {
  const [error, setError] = useState();

  const dispatch = useDispatch();

  const handleLogin = () => {
    setError('');
  };

  return (
    <div>
      <h3>Login Page</h3>
      {error && <p>{error}</p>}
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}
