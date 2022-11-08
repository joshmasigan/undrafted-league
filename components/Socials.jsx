import React from "react";
import SocialCard from "./socials/SocialCard";

const Socials = ({ socialProps }) => {
  return (
    <div className="section-container">
      <div className="socials-heading">
        <p>Social Media</p>
        <hr />
        <h2>Highlight Reels</h2>
      </div>

      <div className="social-cards-container">
        {socialProps?.map((socialObj, index) => (
          <SocialCard key={index} socialProps={socialObj} />
        ))}
      </div>
    </div>
  );
};

export default Socials;
