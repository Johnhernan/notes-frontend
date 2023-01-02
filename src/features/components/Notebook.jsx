import {
  Card,
  CardContent,
  Grid,
  CardActionArea,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

const Notebook = ({title, description, id, deleteNotebook, click}) => {
  return (
      <Grid item >
        <Card className="" sx={{ maxWidth: 345 }}>
          <CardActionArea onClick={() => click(id)}>
            <CardContent>
              <Typography variant="h6" color="black">
                {title}
              </Typography>
              <Typography variant="p" color="black">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
                size="small"
                color="primary"
                onClick={() => deleteNotebook(id)}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>

  );
};
export default Notebook;
