import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Login from './Login';
import Dashboard from './Dashboard';
import { auth } from '../vendors/firebase';
import { loginSync, logoutSync } from '../actions/authActions';

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(loginSync(user));
      } else {
        dispatch(logoutSync());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div className="App">
      <Login />
      {user ? <Dashboard /> : ''}
    </div>
  );
}

export default App;
