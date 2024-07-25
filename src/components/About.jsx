import React from "react";
import aboutImg from "../assets/about1.png";

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg">
              Hello! I'm Zaid, a passionate and dedicated Web Developer
               From Mumbai. With a number 2+ years of
              experience in the industry, I specialize in creating innovative
              and user-friendly [websites/applications/designs] that not only
              meet but exceed client expectations.
            </p>
            
            <p>
            
            </p>
          </div>
        </div>

        <img
          className="mx-auto rounded-3xl py-8 md:py-0"
          src={aboutImg}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;
