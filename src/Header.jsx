import React from "react";
import "./Header.css";
//import signImage from "./sign.png"; // Assuming the image is in the src directory

const Header = () => (
  <div className="open">
    <h1>Sign Language Dịch
      <img id='header' src="sign.png" alt="Sign" />
    </h1>
  </div>
);

export default Header;
