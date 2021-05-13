import React from 'react';
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h3>Dashboard</h3>
      {user && <p>You are logged in as {user.displayName}</p>}
    </div>
  );
}
