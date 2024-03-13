import React from "react";
import Header from "./Header";
import About from "./About";
import Tech from "./Tech";
import Education from "./Education";
import Work from "./Work";
import Contacts from "./Contacts";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-6">
        <About />
        <Tech />
        <Education />
        <Work />
        <Contacts />
      </div>
    </>
  );
};

export default Home;
