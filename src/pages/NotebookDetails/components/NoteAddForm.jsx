import { useState } from "react";
import { Container, FormGroup, TextField, Button } from "@mui/material";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
const NoteForm = ({addButton}) => {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleIsFormOpen = () => {
    setIsFormOpen(!isFormOpen);
  };
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({ ...prevValues, [name]: value }));
  };
  return (
    <Container>
      {isFormOpen && (
        <form noValidate autoComplete="off" onChange={handleFormChange}>
          <FormGroup>
            <TextField
              name="title"
              value={formData.title}
              label="Title"
              color="primary"
              margin="dense"
            />
            <TextField
              name="content"
              value={formData.content}
              label="content"
              color="primary"
              margin="dense"
            />
            <Button
              variant="contained"
              type="button"
              onClick={() =>
                addButton(formData).then(toggleIsFormOpen())
              }
            >
              Add
            </Button>
          </FormGroup>
        </form>
      )}

      <Button variant="outlined" onClick={toggleIsFormOpen}>
        {isFormOpen ? <ArrowDropUp /> : <ArrowDropDown />}
      </Button>
    </Container>
  );
};

export default NoteForm;
