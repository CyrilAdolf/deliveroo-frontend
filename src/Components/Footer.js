import React from "react";

const Footer = () => {
  return (
    <div className="footer container">
      Made with <span>React </span> at&nbsp;
      <span>
        <a
          href="http://www.lereacteur.io"
          rel="noopener noreferrer"
          target="_blank"
        >
          LeReacteur{" "}
        </a>{" "}
      </span>
      by
      <span>
        {" "}
        <a
          href="https://github.com/CyrilAdolf"
          rel="noopener noreferrer"
          target="_blank"
        >
          Cyril
        </a>
      </span>
    </div>
  );
};

export default Footer;
