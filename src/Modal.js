import React from "react";

import "./modal.css";

const resume = require("./images/jnebe_resume.png");

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "model display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <div className="modal-wrapper">
        <div className="modal-main">
          {children}
          <img src={resume} alt="resume"
          style={{width:"75%"}}
          />
          <button onClick={handleClose}>close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
