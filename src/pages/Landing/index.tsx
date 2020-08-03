import React from 'react';
import logo from '../../images/logo.svg';
import landingImg from '../../images/landing.svg';

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

    </div>
  )
}


export default Landing;