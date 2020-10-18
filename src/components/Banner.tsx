import { Container, createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import SearchBar from "./SearchBar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: "50vh",
      backgroundColor: "#cfe8fc",
      alignContent: "center",
    },
  })
);
export default function Banner() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <SearchBar />
    </Container>
  );
}
