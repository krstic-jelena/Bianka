import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = (props) => {
  const { profile } = props;
  return (
    <nav className="blue lighten-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Mljekara Bianka
        </Link>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/history">History</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/registration">Dodatne informacije</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
