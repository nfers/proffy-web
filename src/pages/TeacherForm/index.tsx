import React, { useEffect, useState } from "react";
import axios from "axios";
import PageHeader from "../../components/PageHeader";
// import api from "../../services/api";
import "./styles.css";
import WarningIcon from "../../images/icons/warning.svg";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Select from "../../components/Select";

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
          <TextArea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a Aula</legend>

          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label: "Arte" },
              { value: "Matemática", label: "Matemática" },
              { value: "Biologia", label: "Biologia" },
              { value: "Física", label: "Física" },
              { value: "História", label: "História" },
              { value: "Educação Física", label: "Educação Física" },
              { value: "Redação", label: "Redação" },
              { value: "Gramática", label: "Gramática" },
              { value: "Química", label: "Química" },
            ]}
          />
          <Input type="text" name="cost" label="Custo da Hora por aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horários Disponíveis
            <button type="button">+ Novo Horário</button>
          </legend>

          <div className="schedule-item">
            <Select
              name="week_day"
              label="Dia da semana"
              options={[
                { value: "0", label: "Domingo" },
                { value: "1", label: "Segunda-Feira" },
                { value: "2", label: "Terça-Feira" },
                { value: "3", label: "Quarta-Feira" },
                { value: "4", label: "Quinta-Feira" },
                { value: "5", label: "Sexta-Feira" },
                { value: "6", label: "Sábado" },
              ]}
            />
            <Input type="time" name="from" label="Das" />
            <Input type="time" name="to" label="Até" />
          </div>
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
