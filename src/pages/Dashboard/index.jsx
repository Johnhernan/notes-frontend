//------------ Packages ------------
import { useDispatch, useSelector } from "react-redux";

//------------ API & Actions ------------
import { refreshNotebooks } from "../../reducers/userSlice";
import { deleteNotebook, getNotebooks, postNotebook } from "../../features/services/NotebookService";

//------------ Components/Styles ------------
import Navbar from "../../features/components/Navbar";
import Footer from "../../features/components/Footer";
import NotebookWrapper from "./components/NotebookWrapper";
import NotebookAddForm from "./components/NotebookAddForm";

const Dashboard = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.values);

    const handleAddButton = async (notebook) => {
        let res = await postNotebook(user.values.UID, { ...notebook });
        if (!res) return;
        res = await getNotebooks(user.values.UID);
        dispatch(refreshNotebooks({ notebooks: res.data }));
    };

    const handleDeleteNotebook = async (id) => {
        let res = await deleteNotebook(user.UID, id);
        console.log(res);
        if (res.status !== 200) return;
        res = await getNotebooks(user.UID);
        dispatch(refreshNotebooks({ notebooks: res.data }));
    };

  return (
    <div className="App">
      <Navbar/>
      <NotebookAddForm AddButton={handleAddButton}/>
      <NotebookWrapper deleteNotebook={handleDeleteNotebook}/>
      <Footer/>
    </div>
  );
};
export default Dashboard;
