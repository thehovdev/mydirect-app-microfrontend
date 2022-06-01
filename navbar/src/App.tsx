import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";

const App = () => (
  <Navbar standalone={true} />
);
ReactDOM.render(<App />, document.getElementById("app"));
