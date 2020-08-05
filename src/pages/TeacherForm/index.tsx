import React, { useEffect, useState } from "react";
import axios from "axios";
import PageHeader from "../../components/PageHeader";
// import api from "../../services/api";
import "./styles.css";
import WarningIcon from "../../images/icons/warning.svg";
import Input from "../../components/Input";

interface ConnectionsInterface {
  total: string;
  description: string;
}

function TeacherForm() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3030/connections");
      setData(result.data);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que voce quer dar aulas"
        description="O primeiro passo é preencher este formulário"
      />

      <main>
        <fieldset>
          <legend>Seus Dados</legend>

          <Input type="text" name="name" label="Nome Completo" />
          <Input type="text" name="avatar" label="Avatar" />
          <Input type="text" name="whatsapp" label="WhatsApp" />
        </fieldset>

        <fieldset>
          <legend>Sobre a Aula</legend>

          <Input type="text" name="subject" label="Matéria" />
          <Input type="text" name="cost" label="Custo da Hora por aula" />
        </fieldset>

        <fieldset>
          <legend>Horários Disponíveis</legend>

          <Input type="text" name="week_day" label="Dia da Semana" />
          <Input type="text" name="from" label="Das" />
          <Input type="text" name="to" label="Até" />
        </fieldset>
        <footer>
          <p>
            <img src={WarningIcon} alt="Aviso Importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar Cadastro</button>
        </footer>
      </main>
    </div>
  );
}
export default TeacherForm;
