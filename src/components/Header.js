import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Student Profile <span>Directory</span></h1>
      <p className="header__subtitle">Track, manage, and celebrate student progress</p>
    </header>
  );
}

export default Header;
