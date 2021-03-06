import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProjectDetails = (props) => {
  const { project } = props;
  if (project) {
    return (
      <div className="project-details section container">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className=" card-action grey grey-text lighten-3 ">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>27.Apr, 5PM</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="container center">loading project...</div>;
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.pitanja;
  const project = projects ? projects[id] : null;
  return {
    project: project,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "pitanja" }])
)(ProjectDetails);
