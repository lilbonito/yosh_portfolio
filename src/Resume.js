import React, { Component } from "react";
import Modal from "./Modal";
// import { Document, Page } from "react-pdf";
// import { pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const resumePdf = require("./jnebe_resume.pdf");

class Resume extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <Modal show={this.state.show} handleClose={this.hideModal}>

         
        </Modal>
        
        <p onClick={this.showModal}>Resume</p>
      </div>
    );
  }
}

export default Resume;
