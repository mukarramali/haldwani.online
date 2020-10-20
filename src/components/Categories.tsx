import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import Category from "../types/Category";
import categoriesData from "../utils/categoriesData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listRoot: {
      marginTop: -45,
      marginBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
    },
    paper: {
      padding: 5,
      minWidth: 50,
    },
    categoryTextContent: {
      padding: 20,
    },
  })
);

const CategoryCard = (props: Category) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={3}>
      <Paper className={classes.paper} elevation={4}>
        <Grid container direction="row">
          <Grid item xs={3}>
            <img src={require(`../images/${props.icon}`)} alt={props.title} />
          </Grid>
          <Grid
            item
            xs={9}
            container
            direction="column"
            justify="center"
            className={classes.categoryTextContent}
          >
            <Grid item>
              <Typography variant="h5" align="left">
                {props.title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" align="left">
                {props.subtitle}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default function Categories() {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="space-evenly"
      className={classes.listRoot}
      spacing={2}
    >
      {categoriesData.map((category) => (
        <CategoryCard {...category} />
      ))}
    </Grid>
  );
}
