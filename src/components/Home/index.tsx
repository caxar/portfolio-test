import React from "react";
import Header from "./Header";
import About from "./About";
import Tech from "./Tech";
import Education from "./Education";
import Work from "./Work";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-6">
        <About />
        <Tech />
        <Education />
        <Work />
      </div>
    </>
  );
};

export default Home;
