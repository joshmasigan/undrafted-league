import React from "react";
import { client } from "../lib/client";
import { Hero, About, Socials, Join } from "../components";

const Home = ({ heroData }) => {
  console.log(heroData);
  return (
    <>
      <Hero heroData={heroData.length && heroData[0]} />
      <About />
    </>
  );
};

export const getServerSideProps = async () => {
  const heroQuery = '*[_type == "main"]';
  const heroData = await client.fetch(heroQuery);

  return {
    props: { heroData },
  };
};

export default Home;
