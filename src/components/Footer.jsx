import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
export const Footer = (props) => {
  return (
    <footer className="container-fluid footerBar" {...props}>
      <small>
        Built with <a href="https://picocss.com">Pico</a> •{" "}
        <a href="https://github.com/picocss/examples/tree/master/v2-react-color-schemes-and-modal">
          Source code
        </a>
      </small>
    </footer>
  );
};
