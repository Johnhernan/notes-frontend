import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Typography, TextField, Button, Container } from "@mui/material";

import { useDispatch } from "react-redux";
import { login } from "../../reducers/userSlice";
import { authUser } from "../../features/services/UserService";

const Login = () => {
  //Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [emailEmpty, setEmailEmpty] = useState(null);
  const [loginError, setLoginError] = useState(false);

  //JSX Functions
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({ ...prevValues, [name]: value }));
  };
  const submitButton = async () => {
    setLoginError(false);
    setEmailEmpty(false);
    if (!formData.email) {
      setEmailEmpty(true);
      return;
    }
    const userData = await authUser(formData.email, formData.password);
    console.log(userData)
    if (userData.data.error) {
      setLoginError(true);
      return;
    }

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
        onChange={handleFormData}
        style={{ display: "flex", flexDirection: "column", width: "20rem" }}
      >
        <Typography variant="h6">Login</Typography>

        <TextField
          label="Email"
          name="email"
          InputLabelProps={{
            style: { color: "grey" },
          }}
          required
          value={FormData.email}
          error={loginError}
          margin="dense"
        />
        <TextField
          label="Password"
          name="password"
          InputLabelProps={{
            style: { color: "grey" },
          }}
          required
          type="password"
          value={FormData.password}
          error={loginError}
          margin="dense"
        />

        <Button
          className=""
          variant="contained"
          type="button"
          onClick={() => submitButton()}
        >
          Log In
        </Button>

        <Typography>
          Not a member?{" "}
          <Link to="/" rel="noopener">
            Sign up.
          </Link>
        </Typography>
        <Typography sx={{color: "red"}}> 
          {loginError && "Email or password is incorrect."}
        </Typography>
      </form>
    </Container>

  );
};

export default Login;
