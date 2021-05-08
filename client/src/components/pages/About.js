import React from "react";
import { Parallax } from "react-materialize";

const About = () => {
  return (
    <div>
      <Parallax
        image={<img alt="" src="parallax-1.jpg" />}
        options={{
          responsiveThreshold: 0,
        }}
      />
      <div className="section-about white">
        <div className="row container">
          <h2 className="header">Parallax</h2>
          <p className="grey-text text-darken-3 lighten-3">
            Parallax is an effect where the background content or image in this
            case, is moved at a different speed than the foreground content
            while scrolling.
          </p>
        </div>
      </div>
      <Parallax
        image={<img alt="" src="parallax-2.jpg" />}
        options={{
          responsiveThreshold: 0,
        }}
      />
      <div className="section-about white">
        <div className="row container">
          <h2 className="header">Parallax</h2>
          <p className="grey-text text-darken-3 lighten-3">
            Parallax is an effect where the background content or image in this
            case, is moved at a different speed than the foreground content
            while scrolling.
          </p>
        </div>
      </div>
      <Parallax
        image={<img alt="" src="parallax-3.jpg" />}
        options={{
          responsiveThreshold: 0,
        }}
      />
    </div>
  );
};

export default About;
