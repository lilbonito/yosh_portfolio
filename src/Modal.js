import React from "react";

import "./modal.css";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "model display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
    <div className="modal-wrapper">
      <div className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
