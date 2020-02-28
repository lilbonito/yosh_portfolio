import React, { useState, useRef } from "react";
import useOnClickOutside from "./use-onclick-outside";
import "./modal.css";

const resume = require("./images/jnebe_resume.png");
const Resume = () => {
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <div>
      {isModalOpen ? (
        <div ref={ref} className="modal-main">
          <img className="resume_img"src={resume} alt="resume" style={{ width: "80%", margin: "70px"}} />
        </div>
      ) : (
        <p onClick={() => setModalOpen(true)}>Resume</p>
      )}
    </div>
  );
};

// class Resume extends Component {
//   state = { show: false };

//   showModal = () => {
//     this.setState({ show: true });
//   };
//   hideModal = () => {
//     this.setState({ show: false });
//   };

//   render() {

//   }
// }

export default Resume;
