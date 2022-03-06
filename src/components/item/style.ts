import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    width: "100%",
    "& ul":{
      listStyle: "none",
      color: "#eee",
      padding: "15px 30px",
      borderRadius: "10px",
      backgroundColor: "#759ebb",
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    "& li":{
      display: "flex",
    },
  },
});
