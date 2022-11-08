import React from "react";
import { client } from "../lib/client";
import { Hero, About, Socials, DropIn } from "../components";

const Home = ({ heroData, socialData }) => {
  return (
    <>
      <Hero heroData={heroData.length && heroData[0]} />
      <DropIn />
      <Socials socialProps={socialData} />
      <About />
    </>
  );
};

export const getServerSideProps = async () => {
  const heroQuery = '*[_type == "main"]';
  const heroData = await client.fetch(heroQuery);

  const socialQuery = '*[_type == "social"]';
  const socialData = await client.fetch(socialQuery);

  return {
    props: { heroData, socialData },
  };
};

export default Home;
