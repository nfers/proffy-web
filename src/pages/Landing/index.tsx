import React from "react";
import logo from "../../images/logo.svg";
import landingImg from "../../images/landing.svg";
import studyIcon from "../../images/icons/study.svg";
import giveClassesIcon from "../../images/icons/give-classes.svg";
import purpleHeart from "../../images/icons/purple-heart.svg";
import "./style.css";

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logo} alt={logo} />
          <h2>Sua plataforma de estudos online </h2>
        </div>

        <img src={landingImg} alt={landingImg} className="hero-image" />
        <div className="buttons-container">
          <a href="" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </a>

          <a href="" className="give-classes">
            <img src={giveClassesIcon} alt="dar aulas" />
            Dar Aulas
          </a>
        </div>

        <span className="total-connections">
          total de 200 conexões já realizadas{" "}
          <img src={purpleHeart} alt="totais" />
        </span>
      </div>
    </div>
  );
}
export default Landing;
