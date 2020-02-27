import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Thumbnail = props => {
  return (
    <div className="project">
      <Link to="">
        <div className="project-img">
          <img src="" alt="Project" />
        </div>
        <div className="project-title" />
        <div className="project-category" />
      </Link>
    </div>
  );
};

export default Thumbnail;