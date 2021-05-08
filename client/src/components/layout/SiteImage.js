import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";

document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".slider");
  M.Slider.init(elems, {
    full_width: false,
    interval: 7000,
    transition: 800,
  });
});

const SiteImage = () => {
  return (
    <div className="slider">
      <ul className="slides">
        <li>
          <img
            src="sahin-sezer-dincer-oglBmXuiClc-unsplash.jpg"
            alt="Man cleaning the steps"
          />
          <div className="caption center-align">
            <h3>This is our big Tagline!</h3>
            <h5 className="light grey-text text-lighten-3">
              Heres our small slogan.
            </h5>
          </div>
        </li>
        <li>
          <img
            src="jeremy-sallee-lgrM1t4rxWQ-unsplash.jpg"
            alt="commercial washing machines"
          />
          <div className="caption left-align">
            <h3>Left Aligned Caption</h3>
            <h5 className="light grey-text text-lighten-3">
              Heres our small slogan.
            </h5>
          </div>
        </li>
        <li>
          <img
            src="branimir-balogovic-fAiQRv7FgE0-unsplash.jpg"
            alt="cleaning workers demonstrating teamwork"
          />
          <div className="caption right-align">
            <h3>Right Aligned Caption</h3>
            <h5 className="light grey-text text-lighten-3">
              Heres our small slogan.
            </h5>
          </div>
        </li>
        <li>
          <img
            src="gil-ribeiro-3hO8igCybds-unsplash.jpg"
            alt="man cleaning lobby and street front"
          />
          <div className="caption center-align">
            <h3>This is our big Tagline!</h3>
            <h5 className="light grey-text text-lighten-3">
              Heres our small slogan.
            </h5>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default SiteImage;
