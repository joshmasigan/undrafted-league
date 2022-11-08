import Link from "next/link";
import React from "react";
import { urlFor } from "../../lib/client";

const SocialCard = ({ socialProps: { url, image, header, description } }) => {
  return (
    <Link href={url}>
      <div className="social-card">
        <img src={urlFor(image)} />
        <p>{header}</p>
        <h2>{description}</h2>
      </div>
    </Link>
  );
};

export default SocialCard;
