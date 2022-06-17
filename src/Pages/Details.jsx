import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import NotesWrapper from "../components/Notes/NotesWrapper";
import { refreshNotes } from "../reducers/userSlice";
import { postNote, getNotes } from "../api/api";

//import {} from "@mui/material";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NoteForm from "../components/NoteForm";

const Notebook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.values);

  const handleAddButton = async (note) => {
    let res = await postNote(user.UID, { notebookID: id, ...note });
    console.log(res);
    if (!res) return;
    res = await getNotes(user.UID);
    dispatch(refreshNotes({ notes: res.data }));
  };

  return (
    <div>
      <Navbar />
      <NoteForm handleAddButton={handleAddButton} />
      <NotesWrapper id={id} />
      <Footer />
    </div>
  );
};
export default Notebook;
