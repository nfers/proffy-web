import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import giveClassesIcon from "../../images/icons/give-classes.svg";
import purpleHeart from "../../images/icons/purple-heart.svg";
import studyIcon from "../../images/icons/study.svg";
import postsIcon from "../../images/icons/support.svg";
import landingImg from "../../images/landing.svg";
import logo from "../../images/logo.svg";
import api from "../../services/api";
import "./style.css";

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  // Exemplo 1
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await api.get("/connections");
  //     const { total } = result.data;
  //     setTotalConnections(total);
  //   };
  //   fetchData();
  // }, []);

  // Exemplo 2
  useEffect(() => {
    api.get("/connections").then((res) => {
      const { total } = res.data;
      setTotalConnections(total);
    });
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logo} alt={logo} />
          <h2>Sua plataforma de estudos online </h2>
        </div>

        <img src={landingImg} alt={landingImg} className="hero-image" />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="dar aulas" />
            Dar Aulas
          </Link>
          <Link to="/posts" className="study">
            <img src={postsIcon} alt="Comentários" />
            Posts
          </Link>
        </div>

        <span className="total-connections">
          total de {totalConnections} conexões já realizadas{" "}
          <img src={purpleHeart} alt="totais" />
        </span>
      </div>
    </div>
  );
}
export default Landing;
