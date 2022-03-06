import { Box } from "@mui/material";
import { useStyles } from "./style";
import BookIcon from "@material-ui/icons/Book";
import PersonIcon from "@material-ui/icons/Person";
import LinkIcon from "@material-ui/icons/Link";

function Item(props) {

  const style = useStyles();

  return (
    <Box className={style.container}>
      <ul>
        <li><PersonIcon /> {props.author}</li>
        <li> <BookIcon /> {props.title}</li>
        <li><LinkIcon /> {props.url}</li>
      </ul>
    </Box>
  );
}

export default Item;