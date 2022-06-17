import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Typography, TextField, Button, Container } from "@mui/material";
import { createUser, authUser } from "../api/api";
import { login } from "../reducers/userSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  //Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [passError, setPassError] = useState(false);
  const [doesAccountExist, setDoesAccountExist] = useState(false);

  //JSX Functions
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const isFormValid = () => {
    if (!formData.email || !formData.password || !formData.passwordConfirm)
      return false;
    const { password, passwordConfirm } = formData;

    if (password !== passwordConfirm) {
      setPassError(true);
      return false;
    }
    return true;
  };

  const submitForm = async () => {
    if (!isFormValid()) return;

    const res = await createUser(formData.email, formData.password);
    if (res.status === 400) {
      setDoesAccountExist(true);
      return;
    }
    const userData = await authUser(formData.email, formData.password);
    if (!userData) return;
    dispatch(login(userData.data));
    navigate("/u/dashboard");
  };

  //Template
  return (
    <Container
      className="App"
      sx={{
        display: "grid",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <form
        noValidate
        autoComplete="off"
        onChange={handleFormChange}
        style={{ display: "flex", flexDirection: "column", width: "20rem" }}
      >
        <Typography variant="h6">Sign Up</Typography>

        <TextField
          label="Email"
          name="email"
          InputLabelProps={{
            style: { color: "grey" },
          }}
          required
          helperText="Field cannot be empty"
          value={FormData.email}
          margin="dense"
        />

        <TextField
          label="Password"
          name="password"
          InputLabelProps={{
            style: { color: "grey" },
          }}
          value={FormData.password}
          required
          type="password"
          helperText="Field cannot be empty"
          error={passError}
          margin="dense"
        />

        <TextField
          label="Confirm Password"
          name="passwordConfirm"
          InputLabelProps={{
            style: { color: "grey" },
          }}
          value={FormData.passwordConfirm}
          required
          type="password"
          helperText="Field cannot be empty"
          error={passError}
          margin="dense"
        />
        <Button variant="contained" onClick={submitForm} type="button">
          Sign up
        </Button>

        {doesAccountExist && <Typography>This user already exist.</Typography>}

        <Typography>
          Already a member?{" "}
          <Link to="/login" rel="noopener">
            Log in.
          </Link>
        </Typography>
      </form>
    </Container>
  );
};

export default Home;
