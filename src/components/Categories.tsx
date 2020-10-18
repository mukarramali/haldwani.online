import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    paper: {
      padding: 5,
      margin: "-45px 10px 10px 10px",
    },
  })
);

interface Category {
  icon?: string;
  gradientBackground?: string;
  title: string;
  subtitle: string;
  link?: string;
}

const Category = (props: any) => {
  const classes = useStyles();
  return (
    <Grid item xs={3}>
      <Paper className={classes.paper} elevation={4}>
        <Grid container direction="row">
          <Grid item xs={3}>
            <img src={props.icon} />
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h5">{props.title}</Typography>
            <Typography variant="subtitle2">{props.subtitle}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

const categoryData: Category[] = [
  {
    gradientBackground: "linear-gradient(45deg, #bfc932 30%, #f4fc66 90%)",
    icon: require("../images/groceries.png"),
    title: "Groceries",
    subtitle: "Freshness home delivered",
  },
];

export default function Categories() {
  const classes = useStyles();

  return (
    <Grid container justify="space-evenly" className={classes.root}>
      {[0, 1, 2, 3].map((category) => (
        <Category {...categoryData[category]} />
      ))}
    </Grid>
  );
}
