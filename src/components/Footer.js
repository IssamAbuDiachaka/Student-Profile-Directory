import React from "react";
import "./Footer.css";

function Footer({ totalStudents }) {
  return (
    <footer className="footer">
      <p className="total">
        Total Students: <span className="count">{totalStudents}</span>
      </p>
      <p className="copy">© 2026 Student Profile Directory</p>
    </footer>
  );
}

export default Footer;
