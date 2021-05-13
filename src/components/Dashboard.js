import React from 'react';
import { useSelector } from 'react-redux';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

export default function Dashboard() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <h3>Dashboard</h3>
      <img src={`${user.photoURL}`} alt="hello" />
      {isAuth && <p>{user.displayName}</p>}
      <NoteForm />
      <NoteList />
    </div>
  );
}
