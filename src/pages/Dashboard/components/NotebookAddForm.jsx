import { useState } from "react";
import { Container, FormGroup, TextField, Button } from "@mui/material";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
const NotebookAddForm = ({AddButton}) => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const toggleIsFormOpen = () => {
    setIsFormOpen(!isFormOpen);
  };
  const handleFormChange = (e) => {
    const { name, value } = e;
    setFormData((prevValues) => ({ ...prevValues, [name]: value }));
  };
  return (
    <Container>
      {isFormOpen &&
        <form noValidate autoComplete="off" onChange={(e) => handleFormChange(e.target)}>
          <FormGroup>
            <TextField
              name="title"
              value={formData.title}
              label="Title"
              color="primary"
              margin="dense"
            />
            <TextField
              name="description"
              value={formData.description}
              label="Description"
              color="primary"
              margin="dense"
            />
            <Button
              variant="contained"
              type="button"
              onClick={() => AddButton(formData).then(toggleIsFormOpen())}
            >
              Add
            </Button>
          </FormGroup>
        </form>
      }

      <Button variant="outlined" onClick={toggleIsFormOpen}>
        {isFormOpen ? <ArrowDropUp /> : <ArrowDropDown />}
      </Button>
    </Container>
  );
};

export default NotebookAddForm;
