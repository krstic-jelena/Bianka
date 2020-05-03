import React, { Component } from "react";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";

class Registration extends Component {
  render() {
    const { projects, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <h5>
              Sva dodatna pitanja, sugestije, kao i eventualne propuste mozete
              navesti u Vasem komentaru.
            </h5>
            <h5>Vasa Bianka</h5> <br /> <br />
            <ul className="center">
              <li>
                <NavLink to="/create">
                  <button className="btn btn-primary">
                    Ostavite komentar{" "}
                  </button>
                </NavLink>
              </li>
            </ul>
            >
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);

  return {
    projects: state.firestore.ordered.pitanja,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "pitanja" }])
)(Registration);
