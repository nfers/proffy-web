import React from "react";
import wppIcon from "../../images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://lh3.googleusercontent.com/ogw/ADGmqu-zQ3VvJKgtBvIObfo-R8JldPeOo6CpjZalOKN6=s83-c-mo"
          alt="Nayara Ferreira"
        />
        <div>
          <strong>Nayara Ferreira</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>Curte ensinar os cálculos da vida. Especialiste em regra de 3</p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$ 120,00</strong>
        </p>
        <button type="button">
          <img src={wppIcon} alt="whattsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
