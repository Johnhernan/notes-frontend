
import {Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";

import Notebook from "../../../features/components/Notebook";
const NotebookWrapper = ({notebooks, deleteNotebook}) => {
    const navigate = useNavigate();
    const handleClick = (id) => navigate(`/u/${id}`);

    return (
        <Grid
            container
            rowSpacing={3}
            spacing={4}
            justifyContent="center"
            columns={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            sx={{ py: 5 }}
        >
            { notebooks && notebooks.map((notebook) => (
                <Notebook
                    key={notebook.notebook}
                    id={notebook.notebook}
                    title={notebook.title}
                    description={notebook.description}
                    color={notebook.color}
                    click={handleClick}
                    deleteNotebook={deleteNotebook}
                />
            ))}
        </Grid>
    );
};
export default NotebookWrapper;