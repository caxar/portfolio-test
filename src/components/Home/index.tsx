import React from "react";
import Header from "./Header";
import About from "./About";
import Tech from "./Tech";

const Home = () => {
  return (
    <div className="container mx-auto px-6">
      <section className="h-[100vh]">
        <Header />
        <About />
      </section>
      <section>
        <Tech />
      </section>
    </div>
  );
};

export default Home;
