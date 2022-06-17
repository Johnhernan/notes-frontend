import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";

import Notebook from "./Notebook";

import { refreshNotebooks } from "../../reducers/userSlice";
import { deleteNotebook, getNotebooks } from "../../api/api";
const NotebookWrapper = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.values);

  const handleClick = (id) => {
    navigate(`/u/${id}`);
  };

  const handleDelete = async (id) => {
    let res = await deleteNotebook(user.UID, id);
    console.log(res);
    if (!res.status === 200) return;
    res = await getNotebooks(user.UID);
    dispatch(refreshNotebooks({ notebooks: res.data }));
  };

  return (
    <Grid
      container
      rowSpacing={3}
      spacing={4}
      justifyContent="center"
      columns={{ xs: 12, sm: 6, md: 4, lg: 3 }}
      sx={{ py: 5 }}
    >
      {user.notebooks &&
        user.notebooks.map((notebook) => {
          return (
            <Grid item key={notebook.notebook}>
              <Notebook
                id={notebook.notebook}
                title={notebook.title}
                description={notebook.description}
                color={notebook.color}
                handleClick={handleClick}
                handleDelete={handleDelete}
              />
            </Grid>
          );
        })}
    </Grid>
  );
};
export default NotebookWrapper;
