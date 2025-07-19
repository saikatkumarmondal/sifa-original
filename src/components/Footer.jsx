import React from "react";


const Footer = () => {
  
    const image = { path: "/Photo/Photo/LOGO/logo.png" };

    return (
      <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
        <nav>
          <img src={image.path} alt="" className="w-[130px] h-[80px]" />
          <a className="link link-hover" href="/">
            <p className="text-xl">NINGBO SIFA ELEVATOR CO., LTD.</p>
          </a>
          <a className="link link-hover">
            <p className="font-semibold">CONTACT US</p>
          </a>
          <a className="link link-hover">
            <p>
              Address: A3085, Building 1,
              <br /> No.888, Dongchang Road,
              <br /> Jiangbei District, Ningbo,
              <br /> China.
              <br /> Phone: +86-13056798250 Email:
              <br />
              info@nbsifa.com
            </p>
          </a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl font-bold ">ELEVATOR</h6>
          <a className="link link-hover">
            <p>Passenger Elevator</p>
          </a>
          <a className="link link-hover">
            <p>Villa Elevator</p>
          </a>
          <a className="link link-hover">
            <p>Panoramic Elevator </p>
          </a>
          <a className="link link-hover">
            <p>Hospital Elevator</p>
          </a>
          <a className="link link-hover">
            <p>Freight Elevator</p>
          </a>
          <a className="link link-hover">
            <p>Hydraulic Elevator</p>
          </a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl font-bold">ESCALATOR</h6>
          <div className="grid grid-rows gap-4">
            <a>
              <p>Outdoor Escalator</p>
            </a>
            <a>
              <p>Indoor Escalator</p>
            </a>
            <a>
              <p>Moving Walkway</p>
            </a>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title text-xl font-bold">COMPANY</h6>
          <div className="grid grid-rows gap-4">
            <a>
              <p>About Us</p>
            </a>
            <a>
              <p>Newsroom</p>
            </a>
          </div>
        </nav>
      </footer>
    );
};

export default Footer;
