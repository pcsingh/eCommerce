import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      // react.fragment to avoid extra div tag
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

          <div className="container-fluid">
            <a className="navbar-brand" href="/#">ECommerce</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">

                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    <i class="me-1 fa fa-sign-in" aria-hidden="true"></i>
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    <i class="me-1 fa fa-tachometer" aria-hidden="true"></i>
                    Dashboard
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/customers">
                    <i class="me-1 fa fa-list-ul" aria-hidden="true"></i>
                    Customers
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    <i class="me-1 fa fa-shopping-cart" aria-hidden="true"></i>
                    Shopping Cart
                  </Link>
                </li>

                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="/#">Action</a></li>
                    <li><a className="dropdown-item" href="/#">Another action</a></li>
                    <li><a className="dropdown-item" href="/#">Something else here</a></li>
                  </ul>
                </li> */}

              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
