import React from 'react';
import Slider from './Slider';
import Gallery from './Gallery';
import VerticalTransport from './VerticalTransport';
import SifaElevator from './SifaElevator';
import SpareParts from './SpareParts';
import WhyChooseUs from "./WhyChooseUs";
import TechnicalStrength from "./TechnicalStrength";
import GlobalCase from "./GlobalCase";


const Home = () => {
  return (
    <>
      <div>
        <section className="overflow-y-hidden ">
          <Slider></Slider>
          <Gallery></Gallery>

          <VerticalTransport></VerticalTransport>
          <SifaElevator></SifaElevator>
          <SpareParts></SpareParts>
          <WhyChooseUs></WhyChooseUs>
          <TechnicalStrength></TechnicalStrength>
          <GlobalCase></GlobalCase>
          <div className="mb-10 lg:mb-20" />
        </section>
      </div>
    </>
  );
};

export default Home;