import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hidden: { display: "none" },
  container: {
    padding: "2rem",
    [theme.breakpoints.down("xs")]: { margin: 0 },
  },
}));

export default useStyles;
