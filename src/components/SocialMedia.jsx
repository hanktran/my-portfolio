import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/imhantk/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a href="https://github.com/hanktran" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
