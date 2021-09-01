import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hidden: { display: "none" },
  container: {
    width: "100%",
    padding: "2rem",
    [theme.breakpoints.down("xs")]: { margin: 0 },
  },
}));

export default useStyles;
