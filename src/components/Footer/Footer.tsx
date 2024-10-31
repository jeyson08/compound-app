import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <a
        href="https://www.jeysonboursault.com/"
        target="blank"
        rel="noopener noreferrer"
      >
        © Jeyson Boursault | {date.getFullYear()}
      </a>
    </footer>
  );
};

export default Footer;
