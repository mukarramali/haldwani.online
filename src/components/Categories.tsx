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
      minWidth: 200,
      margin: "-45px 10px 10px 10px",
    },
    categoryTextContent: {
      padding: 20,
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

const categoryData: Category[] = [
  {
    icon: "groceries.png",
    title: "Groceries",
    subtitle: "Freshness home delivered",
  },
  {
    icon: "pharmacy.png",
    title: "Pharmacy",
    subtitle: "Get help for medicines",
  },
  {
    icon: "women-clothing.png",
    title: "Women's Clothing",
    subtitle: "Traditional designs curated",
  },
  {
    icon: "men-clothing.png",
    title: "Men's Clothing",
    subtitle: "Traditional designs curated",
  },
  {
    icon: "women-shoes.png",
    title: "Women's Shoes",
    subtitle: "Shop branded designs",
  },
  {
    icon: "men-shoes.png",
    title: "Men's Shoes",
    subtitle: "Shop branded designs",
  },
  {
    icon: "bakery.png",
    title: "Bakery",
    subtitle: "Fresh local bakery",
  },
  {
    icon: "gifts.png",
    title: "Gifts",
    subtitle: "For every occasion",
  },
];

export default function Categories() {
  const classes = useStyles();

  return (
    <Grid container justify="space-evenly" className={classes.root}>
      {categoryData.map((category) => (
        <Category {...category} />
      ))}
    </Grid>
  );
}
