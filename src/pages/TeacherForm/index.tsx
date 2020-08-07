import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";
import WarningIcon from "../../images/icons/warning.svg";
import api from "../../services/api";
import "./styles.css";

function TeacherForm() {
  const history = useHistory();
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [bio, setBio] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const newArray = scheduleItems.map((schedule, index) => {
      if (index === position) {
        return { ...schedule, [field]: value };
      }

      return schedule;
    });
    setScheduleItems(newArray);
  }

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 4, from: "2:00 PM", to: "17:00 PM" },
    ]);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api
      .post("classes", {
        name,
        avatar,
        bio,
        whatsapp,
        cost: Number(cost),
        subject,
        schedule: scheduleItems,
      })
      .then(() => {
        alert("Cadastro realizado");
        history.push("/");
      })
      .catch((error) => {
        alert(`${error}`);
      });
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que voce quer dar aulas"
        description="O primeiro passo é preencher este formulário"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus Dados</legend>

            <Input
              type="text"
              name="name"
              label="Nome Completo"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              type="text"
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            />
            <Input
              type="text"
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
            />
            <TextArea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a Aula</legend>

            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
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
            <Input
              type="text"
              name="cost"
              label="Custo da Hora por aula"
              value={cost}
              onChange={(e) => {
                setCost(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários Disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo Horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    value={scheduleItem.week_day}
                    onChange={(e) =>
                      setScheduleItemValue(index, "week_day", e.target.value)}
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
                  <Input
                    type="time"
                    name="from"
                    value={scheduleItem.from}
                    label="Das"
                    onChange={(e) =>
                      setScheduleItemValue(index, "from", e.target.value)}
                  />
                  <Input
                    type="time"
                    name="to"
                    value={scheduleItem.to}
                    label="Até"
                    onChange={(e) =>
                      setScheduleItemValue(index, "to", e.target.value)}
                  />
                </div>
              );
            })}
          </fieldset>
          <footer>
            <p>
              <img src={WarningIcon} alt="Aviso Importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar Cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}
export default TeacherForm;
