import React from "react";
import "./Footer.css";

function Footer({ totalStudents }) {
  return (
    <footer className="footer">
      <p className="footer__text">
        Total Students: <span className="footer__count">{totalStudents}</span>
      </p>
      <p className="footer__copy">© 2026 Student Profile Directory</p>
    </footer>
  );
}

export default Footer;
