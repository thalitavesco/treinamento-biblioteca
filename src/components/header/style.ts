import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    height: "100vh",
    color: "#000",
    fontSize: "16px",
  },
  header:{
    display: "flex",
    alignItems: "center",
  },
  main:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "40%",
  },
});
