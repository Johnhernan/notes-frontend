//------------ Packages ------------
import { useState } from "react";
import { Typography, Button } from "@mui/material";

//------------ Utilities ------------
import { useDispatch, useSelector } from "react-redux";
import { getNotebooks, postNotebook } from "../api/api";
//------------ Actions ------------
import { refreshNotebooks } from "../reducers/userSlice";
//------------ Components/Styles ------------
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotebookWrapper from "../components/Notebook/NotebookWrapper";
import NotebookForm from "../components/NotebookForm";

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleAddButton = async (notebook) => {
    let res = await postNotebook(user.values.UID, { ...notebook });
    if (!res) return;
    res = await getNotebooks(user.values.UID);
    dispatch(refreshNotebooks({ notebooks: res.data }));
  };

  return (
    <div className="App"

    >
      <Navbar />

      <NotebookForm handleAddButton={handleAddButton} />

      <NotebookWrapper />

      <Footer />
    </div>
  );
};
export default Dashboard;
