//------------ Packages ------------
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//------------ API & Actions ------------
import { refreshNotes } from "../../reducers/userSlice";
import { postNote, getNotes, deleteNote } from "../../features/services/api";

//------------ Components/Styles ------------
import Navbar from "../../features/components/Navbar";
import Footer from "../../features/components/Footer";
import NoteAddForm from "./components/NoteAddForm";
import NotesWrapper from "./components/NotesWrapper";

const NotebookDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.values);

    const handleAddButton = async (note) => {
        let res = await postNote(user.UID, { notebookID: id, ...note });
        if (!res) return;
        res = await getNotes(user.UID);
        dispatch(refreshNotes({ notes: res.data }));
    };
    const handleDelete = async (id) => {
        let res = await deleteNote(user.UID, id);
        if (res.status !== 200) return;
        res = await getNotes(user.UID);
        dispatch(refreshNotes({ notes: res.data }));
    };

  return (
    <div>
      <Navbar/>
      <NoteAddForm addButton={handleAddButton} />
      <NotesWrapper id={id} notes={user.notes}/>
      <Footer/>
    </div>
  );
};
export default NotebookDetails;
