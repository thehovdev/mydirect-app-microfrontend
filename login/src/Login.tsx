import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

function Login({ standalone = false }) {
  const login = (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-3 mt-5">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value="user@example.com"
                onChange={(e) => console.log(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                Well never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value="qwerty12345!"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                checked
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                onChange={(e) => console.log(e.target.value)}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <NavLink to="/citates">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  )

  return standalone ? <Router>{login}</Router> : login
}

Login.propTypes = {
  standalone: PropTypes.bool,
}

export default Login
