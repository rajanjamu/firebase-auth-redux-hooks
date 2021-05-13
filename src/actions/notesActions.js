import { database } from '../vendors/firebase';

export const addNoteSync = (note) => ({
  type: 'ADD_NOTE',
  note,
});

export const addNote = (note) => {
  return (dispatch, getState) => {
    const uid = getState().auth.user.uid;

    return database
      .ref(`users/${uid}/notes`)
      .push(note)
      .then((ref) => {
        dispatch(addNoteSync({ id: ref.key, ...note }));
      });
  };
};

export const editNoteSync = (id, updates) => ({
  type: 'EDIT_NOTE',
  id,
  updates,
});

export const editNote = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.user.uid;

    return database
      .ref(`users/${uid}/notes/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editNoteSync(id, updates));
      });
  };
};

export const removeNoteSync = (id) => ({
  type: 'REMOVE_NOTE',
  id,
});

export const removeNote = (id) => {
  return (dispatch, getState) => {
    const uid = getState().auth.user.uid;

    if (window.confirm('Do you really want to delete this device?')) {
      return database
        .ref(`users/${uid}/notes/${id}`)
        .remove()
        .then(() => {
          dispatch(removeNoteSync(id));
        });
    }
  };
};

export const setNotesSync = (notes) => ({
  type: 'SET_NOTES',
  notes,
});

export const setNotes = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.user.uid;

    return database
      .ref(`users/${uid}/notes`)
      .once('value')
      .then((snapshot) => {
        const notes = [];

        snapshot.forEach((childSnapshot) => {
          notes.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setNotesSync(notes));
      });
  };
};

export const setCurrId = (currId) => ({
  type: 'SET_CURR_ID',
  currId,
});
