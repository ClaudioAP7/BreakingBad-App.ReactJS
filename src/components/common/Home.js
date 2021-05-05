import React from "react";
import { Link } from "react-router-dom";
import charactersIco from "../../assets/images/ico/characters.png";
import deathsIco from "../../assets/images/ico/deaths.png";
import quotesIco from "../../assets/images/ico/quotes.png";
import "../../assets/scss/home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <Link className="subcard" to="/characters" style={{ textDecoration: 'none' }}>
        <div className="face face1">
          <div className="content">
            <img src={charactersIco} alt="characters ico" />
            <h3>Characters</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p className="sub-text">Actors and characters information</p>
          </div>
        </div>
      </Link>
      <Link className="subcard" to="/counter" style={{ textDecoration: 'none' }}>
        <div className="face face1">
          <div className="content">
            <img src={deathsIco} alt="deaths ico" />
            <h3>Deaths</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p className="sub-text">Updated deaths counter</p>
          </div>
        </div>
      </Link>
      <Link className="subcard" to="/quotes" style={{ textDecoration: 'none' }}>
        <div className="face face1">
          <div className="content">
            <img src={quotesIco} alt="episodes ico" />
            <h3>Quotes</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p className="sub-text">Random quotes</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
