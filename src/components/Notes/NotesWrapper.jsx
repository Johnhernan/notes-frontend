import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Stack } from "@mui/material";
import { deleteNote, getNotes } from "../../api/api";

import { refreshNotes } from "../../reducers/userSlice";
import Note from "./Note";
const NotesWrapper = ({ id }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.values);
  const notes = user.notes.filter((n) => n.notebookID === id);

  const handleDelete = async (id) => {
    let res = await deleteNote(user.UID, id);
    if (!res.status === 200) return;
    res = await getNotes(user.UID);
    dispatch(refreshNotes({ notes: res.data }));
  };

  return (
    <Stack alignItems="center">
      {notes.map((n) => (
        <Note
          title={n.title}
          content={n.content}
          id={n.note}
          handleDelete={handleDelete}
        />
      ))}
    </Stack>
  );
};

export default NotesWrapper;
