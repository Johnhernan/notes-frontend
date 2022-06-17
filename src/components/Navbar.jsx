import { Grid, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/u/dashboard");
  };
  return (
    <Grid
      className=""
      container
      sx={{
        background: "#06283D",
        padding: "3% 7%",
        color: "white",
      }}
      justifyContent="space-between"
      alignContent="baseline"
    >
      <Grid item>
        <Typography
          variant="h5"
          className="nav-brand"
          onClick={handleLogoClick}
        >
          Notebooks
        </Typography>
      </Grid>
      <Grid item>
        <Stack direction="row" spacing={3}>
          <Link to="/u/dashboard">Home</Link>
        </Stack>
      </Grid>
    </Grid>
  );
};
export default Navbar;
