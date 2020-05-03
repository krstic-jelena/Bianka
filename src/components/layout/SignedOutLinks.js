import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <div>
      <ul>
        <li className="center">
          <NavLink to="/signup">
            <button className="btn btn-primary ">Sign in</button>
          </NavLink>
        </li>{" "}
        <br />
        <li className="center">
          <NavLink to="/signin">
            {" "}
            <button className="btn btn-primary">Log in</button>
          </NavLink>
        </li>{" "}
      </ul>
    </div>
  );
};

export default SignedOutLinks;
