export const getCurrNote = (state) => {
  return state.notes.notes.find((note) => note.id === state.notes.currId);
};

export const getNotes = (state) => {
  return state.notes.notes;
};
