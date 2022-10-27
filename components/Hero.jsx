import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Hero = ({ heroData }) => {
  return (
    <div className="home-main-container">
      <div className="home-bg">
        <div className="filter">
          <img src={urlFor(heroData.background)} className="img-bg" />
        </div>
      </div>
      <div className="text-div">
        <p className="small-text">{heroData.smallText}</p>
        <h3>{heroData.midText}</h3>
        {/* <h1>{heroData.largeText}</h1> */}

        <div>
          <div className="desc">
            <h5>League Info</h5>
            <p>{heroData.description}</p>
            <Link href="/league/signup">
              <button type="button">{heroData.buttonText}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
