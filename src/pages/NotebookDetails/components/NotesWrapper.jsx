import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Stack } from "@mui/material";

import Note from "../../../features/components/Note";
const NotesWrapper = ({ id, notes, handleDelete }) => {


  return (
    <Stack alignItems="center">
      {notes && notes.map((n) => (
        <Note
          title={n.title}
          content={n.content}
          id={n.note}
          delete={handleDelete}
        />
      ))}
    </Stack>
  );
};

export default NotesWrapper;
