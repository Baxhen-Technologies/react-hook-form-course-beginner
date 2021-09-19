import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  helperText: {
    "& .MuiFormHelperText-root.Mui-error": {
      position: "absolute",
      top: "calc(100% + 5px)",
    },
  },
}));

export default useStyles;
