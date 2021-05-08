import React from "react";

const InfoCard = () => {
  return (
    <div className="card sticky-action" style={{ overflow: "visible" }}>
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src="istockphoto-870219332-612x612.jpg" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          Card Title<i className="material-icons right">more_vert</i>
        </span>

        <p>
          <a href="#!">This is a link</a>
        </p>
      </div>

      <div className="card-action">
        <a href="#">This is a link</a>
      </div>

      <div
        className="card-reveal"
        style={{ display: "none", transform: "translateY(0%)" }}
      >
        <span className="card-title grey-text text-darken-4">
          Card Title<i className="material-icons right">close</i>
        </span>
        <p>
          Here is some more information about this product that is only revealed
          once clicked on.
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
