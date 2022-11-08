import React from "react";
import Link from "next/link";
import { FaTiktok, FaInstagram, FaDiscord, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <p>{year} UnDrafted League © All Rights Reserved</p>
      <div className="icon-container">
        <Link href="/">
          <a className="footer-icon">
            <FaInstagram />
          </a>
        </Link>
        <Link href="/">
          <a className="footer-icon-tik">
            <FaTiktok />
          </a>
        </Link>
        <Link href="/">
          <a className="footer-icon">
            <FaYoutube />
          </a>
        </Link>
        <Link href="/">
          <a className="footer-icon">
            <FaDiscord />
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
