import React, { FormEvent, useState } from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";
import TeacherItem from "../../components/TeacherItem";
import "./styles.css";

function TeacherList() {
  const [subject, setSubject] = useState("");
  const [week_day, setWeek_day] = useState("");
  const [time, setTime] = useState("");

  function searchTeachers(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os Proffys disponíveis">
        <form id="search-teachers" onSubmit={searchTeachers}>
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
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={(e) => {
              setWeek_day(e.target.value);
            }}
            options={[
              { value: "0", label: "Domingo" },
              { value: "2", label: "Segunda-Feira" },
              { value: "1", label: "Terça-Feira" },
              { value: "2", label: "Quarta-Feira" },
              { value: "3", label: "Quinta-Feira" },
              { value: "4", label: "Sexta-Feira" },
              { value: "5", label: "Sabado" },
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}
export default TeacherList;
