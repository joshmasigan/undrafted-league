import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">UnDrafted League</Link>
      </p>
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link href="/">About Us</Link>
        </li>
        <li className="navbar-item">
          <Link href="/">Drop In</Link>
        </li>
        <li className="navbar-item">
          <Link href="/">League</Link>
        </li>
        <li className="navbar-item">
          <Link href="/">Stats</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
