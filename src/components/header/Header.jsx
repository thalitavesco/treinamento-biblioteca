import { Box } from "@mui/material";
import { Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "./style";
import Item from "../item/Item";
import { useState } from "react";
import axios from "axios";

function Header(props) {

  const styles = useStyles();
  const [query, setQuery] = useState("");
  const [res, setRes] = useState([]);


  const submit = async () => {
    try {
      const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`);
      setRes(response.data.hits);
      console.log(query);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Box className={styles.container}>
      <span>{props.title}</span>
      <div className={styles.header}>
        <TextField onChange={(e) => setQuery(e.target.value)} value={query} sx={{ margin: "5px" }} size="small" variant="outlined" />
        <Button onClick={submit} sx={{ margin: "5px", height: "35px" }} variant="outlined" startIcon={<SearchIcon />}>
          Buscar
        </Button>
      </div>
      <div className={styles.main}>
        {res.map(x => (
          <Item author={x.author} title={x.title} url={x.url} />
        ))}
      </div>
    </Box>
  );
}

export default Header;