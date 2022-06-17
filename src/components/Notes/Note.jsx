import {
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

export const Note = (props) => {
  return (
    <Card className="" sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => props.handleClick(props.id)}>
        <CardContent>
          <Typography variant="h6" color="black">
            {props.title}
          </Typography>
          <Typography variant="p" color="black">
            {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => props.handleDelete(props.id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Note;
