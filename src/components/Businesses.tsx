import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import Business from "../types/Business";
import businessesData from "../utils/businessesData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listRoot: {
      marginTop: 10,
      paddingLeft: 10,
      paddingRight: 10,
    },
    paper: {
      padding: 20,
      minWidth: 50,
      height: "50vh",
      backgroundPosition: "center top",
      backgroundSize: "100% auto",
      backgroundImage:
        'url("https://cdn.shopify.com/s/files/1/0294/3775/5497/files/IMG_20200115_154345_2700x.jpg?v=1596310558")',
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
      height: "100%",
      width: "100%",
      color: "white",
      alignContent: "center",
    },
  })
);

const BusinessCard = (props: Business) => {
  const classes = useStyles();
  return (
    <Grid item xs={11} onClick={() => window.open(props.link)}>
      <Paper className={classes.paper} elevation={4}>
        <Grid
          container
          direction="column"
          className={classes.overlay}
          justify="flex-end"
        >
          <Grid item>
            <Typography variant="h6" align="center">
              Powered by {props.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" align="center">
              {props.description}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default function Businesses() {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="space-evenly"
      className={classes.listRoot}
      spacing={2}
    >
      {businessesData.map((business) => (
        <BusinessCard {...business} />
      ))}
    </Grid>
  );
}
