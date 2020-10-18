import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    paper: {
      height: 140,
      width: 280,
      margin: "-50px 10px 10px 10px",
    },
  })
);

const Category = (props: any) => {
  const classes = useStyles();
  return (
    <Grid item>
      <Paper className={classes.paper} elevation={4} />
    </Grid>
  );
};

export default function Categories() {
  const classes = useStyles();

  return (
    <Grid container justify="space-evenly" className={classes.root}>
      {[1, 2, 3, 4].map((category) => (
        <Category />
      ))}
    </Grid>
  );
}
