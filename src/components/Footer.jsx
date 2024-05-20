import React from "react";

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:cassidy0kovell@gmail.com";
  };

  return (
    <footer className="footer">
      <div className="social-media">
        <a className="tag" href="https://github.com/cassidykovell" target="_blank">
          <i className="fab fa-github" style={{ fontSize: "3rem" }}></i>
        </a>
        <a className="tag" href="https://www.linkedin.com/in/cassidy-kovell-830878272/" target="_blank">
          <i className="fab fa-linkedin" style={{ fontSize: "3rem" }}></i>
        </a>
        <a className="tag" onClick={handleEmailClick} style={{ cursor: "pointer" }}>
          <i className="fas fa-envelope" style={{ fontSize: "3rem" }}></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
