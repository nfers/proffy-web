import React from "react";
import wppIcon from "../../images/icons/whatsapp.svg";
import api from "../../services/api";
import "./styles.css";

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited?: boolean;
}
const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post("connections", {
      user_id: teacher.id,
    });
  }
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://wa.me/${teacher.whatsapp}/text:oii`}
          type="button"
          onClick={createNewConnection}
        >
          <img src={wppIcon} alt="whattsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
