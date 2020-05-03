import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-daarken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by Anonimous</p>
        <p className="grey-text">27.Apr, 5PM</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
