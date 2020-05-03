import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="center">
        <li>
          <NavLink to="/create">
            <button className="btn btn-primary">Ostavite komentar </button>
          </NavLink>
        </li>{" "}
        <br />
        <li>
          <a onClick={props.signOut}>
            <button className="btn btn-primary">Log Out</button>
          </a>
        </li>{" "}
        <br />
      </ul>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
