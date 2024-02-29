// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { HiArrowCircleDown } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>Zyaka - Elevate Your Dining Experience.</p>
            </div>
            <p className="mid">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident possimus optio adipisci dolores impedit illum iusto
              perferendis, laudantium quod accusamus consequuntur consectetur,
              tempore nulla error iure reiciendis dolorem assumenda.
              Necessitatibus fugit asperiores totam rem esse exercitationem
              iusto ipsum qui dolore ex, accusantium repellat mollitia
              repellendus.
            </p>
            <Link to={"/"}>
              Explore Menu below{" "}
              <span>
                <HiArrowCircleDown  />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;