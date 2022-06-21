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
  const [formEmpty, setFormEmpty] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
  });

  const [passMatchError, setPassMatchError] = useState(false);
  const [doesAccountExist, setDoesAccountExist] = useState(false);

  //JSX Functions
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const isFormValid = () => {
    if (!formData.email || !formData.password || !formData.passwordConfirm) {
      !formData.email && setFormEmpty(prevValues => ({...prevValues, email: true}))
      !formData.password && setFormEmpty(prevValues => ({...prevValues, password: true}))
      !formData.passwordConfirm && setFormEmpty(prevValues => ({...prevValues, passwordConfirm: true}))
      return false;
    }
    const { password, passwordConfirm } = formData;

    if (password !== passwordConfirm) {
      setPassMatchError(true);
      return false;
    }
    return true;
  };

  const submitForm = async () => {
    setFormEmpty({
      email: false,
      password: false,
      passwordConfirm: false,
    })
    if (!isFormValid()) return;

    const res = await createUser(formData.email, formData.password);
    console.log(res)
    if (res.data.error) {
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
          value={FormData.email}
          helperText={formEmpty.email && "Field cannot be empty"}
          error={passMatchError}
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
          helperText={
            formEmpty.password? "Field cannot be empty":
            passMatchError && "Password do not Match" 
          }
          error={passMatchError}
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
          helperText={
            formEmpty.passwordConfirm? "Field cannot be empty":
            passMatchError && "Password do not Match" 
          }
          error={passMatchError}
          margin="dense"
        />
        <Button variant="contained" onClick={submitForm} type="button">
          Sign up
        </Button>

        <Typography>
          Already a member?{" "}
          <Link to="/login" rel="noopener">
            Log in.
          </Link>
        </Typography>

        <Typography sx={{color: "red"}}> 
          {doesAccountExist && "This user already exist."}
        </Typography>
      </form>
    </Container>
  );
};

export default Home;
