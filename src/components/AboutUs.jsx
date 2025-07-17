import React from 'react';

const AboutUs = () => {
    const image ={path:'/Photo/Photo/LOGO/SIFA LOGO Dark G.png'}
    return (
      <div className="card  bg-base-100 w-96 shadow-sm mx-auto my-10">
        <div className="card-body ">
          <h2 className="card-title text-4xl">
            {" "}
            About Ningbo SIFA Elevator Co., Ltd.
          </h2>
          <figure>
            <img src={image.path} alt="Shoes" />
          </figure>
          <p className="text-xl">
            Ningbo SIFA Elevator Co., Ltd. is a trusted leader in vertical
            transportation, providing high-quality elevators and escalators for
            a wide range of applications. We serve the residential, commercial,
            and industrial sectors with solutions designed for reliability and
            performance. Our specialized product lines include passenger, villa,
            freight, and panoramic elevators. Beyond complete installations, we
            also specialize in critical key components such as advanced control
            systems, efficient door operators, and essential safety gear. Every
            product we offer is built to meet stringent international safety and
            performance standards. This commitment ensures that all our
            installations are not only reliable and durable but also provide
            peace of mind for our clients.
          </p>
        </div>
      </div>
    );
};

export default AboutUs;
