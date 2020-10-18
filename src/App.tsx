import React from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Businesses from "./components/Businesses";
import { Divider } from "@material-ui/core";

function App() {
  return (
    <div className={"App"}>
      <Header />
      <Banner />
      <Categories />
      <Divider />
      <Businesses />
    </div>
  );
}

export default App;
