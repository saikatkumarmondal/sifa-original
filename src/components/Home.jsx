import React from "react";
import Slider from "./Slider";
import Gallery from "./Gallery";
import VerticalTransport from "./VerticalTransport";
import SifaElevator from "./SifaElevator";
import SpareParts from "./SpareParts";
import WhyChooseUs from "./WhyChooseUs";
import TechnicalStrength from "./TechnicalStrength";
import GlobalCase from "./GlobalCase";
import TechnicalStrength1st from "./TechnicalStrength1st";
import TechnicalStrength2nd from "./TechnicalStrength2nd";

const Home = () => {
  return (
    <div className="bg-white text-black dark:bg-white dark:text-black transition-colors duration-500">
      <section className="overflow-y-hidden">
        <Slider />
        <Gallery />
        <VerticalTransport />
        <SifaElevator />
        <SpareParts />
        <WhyChooseUs />
        <TechnicalStrength1st />
        {/* <TechnicalStrength2nd /> */}
        {/* <TechnicalStrength /> */}
        <GlobalCase />
        <div className="mb-10 lg:mb-20" />
      </section>
    </div>
  );
};

export default Home;
