import React from "react";
import { Link } from "react-router-dom";
import backIcon from "../../images/icons/back.svg";
import logo from "../../images/logo.svg";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="voltar" />
        </Link>
        <img src={logo} alt="Proffy" />
      </div>

      <div className="header-content">
        {/* <strong> {Estes são os Proffys disponíveis}</strong> */}
        <strong>{props.title}</strong>
      </div>
    </header>
  );
};

export default PageHeader;
