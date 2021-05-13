import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Login() {
  const [error, setError] = useState();

  const dispatch = useDispatch();

  return (
    <div>
      <h3>Login Page</h3>
    </div>
  );
}
