import React from "react";
import PageHeader from "../../components/PageHeader";
import "./styles.css";

const Posts: React.FC = () => {
  return (
    <div id="page-posts" className="container">
      <PageHeader title="Leia os comentários dos nossos alunos <3" />
      <main>
        <p>Estamos Desenvolvendo esta página 🔮</p>
      </main>
    </div>
  );
};

export default Posts;
