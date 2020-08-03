import React from 'react';
import logo from '../../images/logo.svg';
import landingImg from '../../images/landing.svg';
import studyIcon from '../../images/icons/study.svg'
import giveClasses from '../../images/icons/give-classes.svg'
import purpleHeart from '../../images/icons/purple-heart.svg'
import './styles.css';

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logo} alt="Proffy" />
          <h2>Sua plataforma de estudos On-line</h2>
        </div>
        <img src={landingImg} alt={landingImg} className="hero-image" />
      </div>
      <div className="buttons-container">
        <a href="" className="study">
          <img src={studyIcon} alt="estudar" />
          Estudar
        </a>
        <a href="" className="give-classes">
          <img src={giveClasses} alt="estudar" />
          Estudar
        </a>
      </div>

      <span className="total-connections">
        Total de 200 conexões já realizadas  <img src={purpleHeart} alt="coração roxo" />
      </span>
    </div>
  )
}


export default Landing;