import React from "react";

const Character = ({ key, image, name, portrayed }) => {
  return (
    <div key={key} className="content-info">
      <div className="card">
        <div className="img-box">
          <img src={image} alt={name} />
        </div>
        <div className="content">
          <h2>
            {name}
            <br />
            <span>{portrayed}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Character;
