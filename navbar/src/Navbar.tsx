import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, NavLink} from "react-router-dom";

export default ({ standalone = false }) => {

  let navbar = <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                      <a className="navbar-brand">mydirect</a>
                      <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <NavLink to="/login">
                          <button className="btn btn-outline-success mx-2" type="button">Login</button>
                        </NavLink>
                      </form>
                    </div>
                  </nav>

  return standalone ? <Router>{ navbar }</Router> : navbar
}