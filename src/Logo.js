import React from "react";
const image = require("./images/yosh_logo.png");

const Logo = props => {
  return (
    <div>
      <img src={image} alt="Logo" style={{ height: "15vh" }} />
    </div>
  );
};

export default Logo;
