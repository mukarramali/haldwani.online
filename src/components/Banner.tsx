import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import { gradientRed } from "../utils/colors";
import SearchBar from "./SearchBar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: "50vh",
      background: gradientRed,
      color: "white",
    },
    heading: {
      margin: 20,
    },
  })
);
export default function Banner() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      className={classes.container}
    >
      <Grid container direction="row" justify="center">
        <Typography variant="h3" className={classes.heading}>
          Haldwani StartUps Hub
        </Typography>
      </Grid>
      <Grid container direction="row" justify="center">
        <SearchBar />
      </Grid>
    </Grid>
  );
}
