import React from "react";
import { Link } from "react-router-dom";
import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";

const Contact = () => {
  return (
    <div>
      <h1 className=" blue-text center strong">kontakt</h1>
      <div className="row">
        <div className="col s12 m7 center">
          <p>Imate bilo kakva pitanja o "Bianka d.o.o?</p>
          <p>Budite slobodni da nam se obratite na navedene adrese:</p>
          <br />
          <h5>Adresa: Zvornik 75400, Karakaj bb</h5>
          <h5>
            Email: <Link to="mljekara@bianca.com">mljekara@bianca.com</Link>
          </h5>
          <h5>
            Facebook: <button className="btn btn-primary">FACEBOOK</button>
          </h5>
        </div>
        <div className="col s12 m4 offset-m1">
          <h5 className=" blue-text center ">
            Registrujte se za sve dodatne informacije{" "}
          </h5>
          <SignedOutLinks />
          <SignedInLinks />
        </div>
      </div>
    </div>
  );
};

export default Contact;
