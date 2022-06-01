import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min"
import "./style.css"
import React from "react";
import ReactDOM from "react-dom";
import Navbar from "navbar/Navbar";
import Login from "login/Login"
import {store} from "./store/store"
import {Provider} from "react-redux";
import {Citates} from "./components/Citates";
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/citates" element={ <Citates/> }/>
      </Routes>
    </Router>
  </Provider>

);
ReactDOM.render(<App />, document.getElementById("app"));
